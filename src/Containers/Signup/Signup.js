import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {firebaseApp} from "./../../Config/firebase"

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
    }; 
  }

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/home");
      } else {
        this.props.history.push("/register");
      }
    });
  }

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handelSubmit = async () => {
    let { fullName, email, password } = this.state;
       await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebaseApp.database().ref("users").push({
            fullName,
            email,
            password
          }).then(()=>{
            alert("data added");
            this.props.history.push("/home");
          })
        })
        .catch(function(error) {
          // var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }



  render() {
    console.log(this.state)
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
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              autoFocus
              onChange={this.handelChange}
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
              onChange={this.handelChange}
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
              onChange={this.handelChange}
            />
            <br />
            <br />
            <div style={{ textAlign: "right" }}>
              <span>
                Already have Account? <Link to="/">Login</Link>
              </span>
            </div>
            <br />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "40%", height: "40px" }}
              onClick={this.handelSubmit}
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
