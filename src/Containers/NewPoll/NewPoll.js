import React from "react";
import { Link } from "react-router-dom"
import Navbar from "./../../Components/Navbar/Navbar";
// import "./Login.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <div className="spacer" style={{height: '40px'}}/>
        <Container maxWidth="sm">
          <Paper className="paper">
            <div className="form-title">
              <span>Create New Poll</span>
            </div>
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              id="question"
              label="Enter Question"
              name="question"
              autoComplete="question"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option 1"
              label="Option 1"
              type="text"
              id="Option-1"
              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option 2"
              label="Option 2"
              type="text"
              id="Option-2"
              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option 3"
              label="Option 3"
              type="text"
              id="Option-3"
              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option 4"
              label="Option 4"
              type="text"
              id="Option-4"
              autoComplete="current-password"
            />
            <br />
            <br />


            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "40%", height: "40px" }}
              >
             Add
            </Button>            
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Dashboard;

