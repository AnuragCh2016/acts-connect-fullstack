import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobPostings } from "./jobs.actions";
import { Button, Card, CardContent, Typography, CircularProgress, Backdrop } from "@mui/material";

const ViewJobPostings = () => {
  const dispatch = useDispatch();
  const { jobPostings, isLoading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobPostings());
  }, [dispatch]);

  return (
    <div className="w-full p-4">
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobPostings.map((job) => (
          <Card key={job.id} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                {job.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {job.company}
              </Typography>
              <Typography variant="body2">
                {job.description}
                <br />
                <strong>Location:</strong> {job.location}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewJobPostings;
