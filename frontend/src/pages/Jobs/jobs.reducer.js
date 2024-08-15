import { createReducer } from '@reduxjs/toolkit';
import { createJobPosting, getJobPostings } from './jobs.actions';

const initialState = {
  jobPostings: [],
  isLoading: false,
};

const jobsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getJobPostings.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getJobPostings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobPostings = action.payload;
    })
    .addCase(getJobPostings.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(createJobPosting.fulfilled, (state, action) => {
      state.jobPostings.push(action.payload);
    });
});

export default jobsReducer;
