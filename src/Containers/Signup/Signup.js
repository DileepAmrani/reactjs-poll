import React from "react";
import { Link } from "react-router-dom"
import "./Signup.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <div className="spacer" />
        <Container maxWidth="sm">
          <Paper elevation={3} className="paper">
            <div className="form-title">
              <span>SIGN UP</span>
            </div>
            <br />
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <br />
            <br />
            <div style={{textAlign: "right"}}>
              <span>Already have Account? <Link to="/">Login</Link></span>
            </div>
            <br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "40%", height: "40px" }}
              >
              Sign Up
            </Button>            
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Signup;
