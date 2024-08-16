import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import PopularUserCard from '../../components/HomeRight/PopularUserCard';
import axios from 'axios'; // Assuming you're using axios for API calls

const courses = ['DAC', 'DASSD', 'DMC', 'DVLSI', 'DESD', 'DIOT', 'DRAT', 'DUASP', 'DAI', 'DBDA', 'DHPCAP', 'DHPCSA', 'DITISS', 'DCSF', 'DFBD'];

const FindPeople = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectedBatchYear, setSelectedBatchYear] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Replace with your API endpoint
        setUsers(response.data);
        setFilteredUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search criteria
  useEffect(() => {
    const applyFilters = () => {
      const filtered = users.filter(user => {
        const matchesName = user.name.toLowerCase().includes(searchName.toLowerCase());
        const matchesBatchYear = selectedBatchYear ? user.batchYear === selectedBatchYear : true;
        const matchesCourse = selectedCourse ? user.course === selectedCourse : true;
        return matchesName && matchesBatchYear && matchesCourse;
      });
      setFilteredUsers(filtered);
    };

    applyFilters();
  }, [searchName, selectedBatchYear, selectedCourse, users]);

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleBatchYearChange = (event) => {
    setSelectedBatchYear(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="px-20">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Find People
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Search by Name"
              variant="outlined"
              fullWidth
              value={searchName}
              onChange={handleSearchNameChange}
              placeholder="Enter name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Batch Year</InputLabel>
              <Select
                value={selectedBatchYear}
                onChange={handleBatchYearChange}
                label="Batch Year"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
                {/* Add more years as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Course</InputLabel>
              <Select
                value={selectedCourse}
                onChange={handleCourseChange}
                label="Course"
              >
                <MenuItem value="">All</MenuItem>
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Grid container spacing={3}>
            {filteredUsers.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <PopularUserCard
                  image={user.image}
                  username={user.name}
                  description={user.description}
                  onClick={() => console.log(`Clicked on user ${user.id}`)} // Adjust as needed
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default FindPeople;
