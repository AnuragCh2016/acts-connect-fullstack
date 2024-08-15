import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Auth/auth.action";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  semister: Yup.string().required("Semister is required"),
});

function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    batchYear: "",
    semister: "",
    course: "",
    prn: "",
    gender: "male",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(registerUser(values));
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="firstName"
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  name="lastName"
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </Grid>
            </Grid>

            <div className="space-y-5 mt-5">
              <div>
                <Field
                  as={TextField}
                  name="email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  name="password"
                  placeholder="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Field
                    as={TextField}
                    name="batchYear"
                    placeholder="Batch Year"
                    type="year"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="batchYear"
                    component="div"
                    className="text-red-500"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="semister-label">Semister</InputLabel>
                    <Field
                      as={Select}
                      name="semister"
                      labelId="semister-label"
                      label="Semister"
                      onChange={(e) => setFieldValue("semister", e.target.value)}
                    >
                      <MenuItem value="March">March</MenuItem>
                      <MenuItem value="September">September</MenuItem>
                    </Field>
                    <ErrorMessage
                      name="semister"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    as={TextField}
                    name="course"
                    placeholder="Course"
                    variant="outlined"
                    fullWidth
                  />
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="text-red-500"
                  />
                </Grid>
              </Grid>
              <div>
                <RadioGroup row name="gender" aria-label="gender">
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  name="prn"
                  placeholder="PRN"
                  type="text"
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage
                  name="prn"
                  component="div"
                  className="text-red-500"
                />
              </div>
</div>
            <Button
              sx={{ padding: ".8rem 0rem" }}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center space-x-1 mt-5 justify-center">
        <p>if you have already account ?</p>
        <Button onClick={() => navigate("/login")} size="small">
          Login
        </Button>
      </div>
    </>
  );
}

export default RegistrationForm;
