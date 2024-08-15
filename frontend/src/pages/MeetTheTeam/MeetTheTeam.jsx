import React from "react";
import { Grid, Card, Avatar, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom"; // Import Link

const teamMembers = [
  {
    name: "Anurag",
    role: "Founder",
    image: "path_to_image_1",
  },
  {
    name: "Kaustab",
    role: "Founder",
    image: "path_to_image_2",
  },
  {
    name: "Aditya",
    role: "Founder",
    image: "path_to_image_3",
  },
  {
    name: "Shreyash",
    role: "Founder",
    image: "path_to_image_4",
  },
  {
    name: "Lokesh",
    role: "Founder",
    image: "path_to_image_5",
  },
  {
    name: "Abhishek",
    role: "Founder",
    image: "path_to_image_6",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid className="relative" item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>
        <Grid item xs={12} lg={9}>
          <div className="px-5 py-10">
            <Typography variant="h4" className="text-center mb-10">
              Meet The Team
            </Typography>
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Link
                    to={`/profile/${member.name.toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className="p-5 flex flex-col items-center">
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{ width: 100, height: 100, mb: 2 }}
                      />
                      <Typography variant="h6">{member.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {member.role}
                      </Typography>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MeetTheTeam;