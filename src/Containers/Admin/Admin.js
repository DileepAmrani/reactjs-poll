import React from "react";
import "./Admin.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {firebaseApp} from "../../Config/firebase"
import Swal from "sweetalert2";



class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/admin");
      }
    });
  }

  handelChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  submitHandle = async () =>{
    let {email,password } = this.state
    firebaseApp.database().ref("admin").once("value", (snap)=>{
      let data = snap.val();
      if(data && data.email === email && data.password === password ){
        Swal.fire("Login Successful!", "success");
        localStorage.setItem("admin", JSON.stringify(data));
        this.props.history.push("/dashboard");
      }
      else{
        Swal.fire({
          icon: 'error',
          text: "Opps.. Login Un Successful!",
        })
      }
    })
  }


  render() { 
    console.log(this.state)
    return (
      <div className="login">
        <div className="spacer" />
        <Container maxWidth="sm">
          <Paper elevation={3} className="paper">
            <div className="form-title">
              <span>Welcome Admin</span><br />
              <span>LOG IN</span>
            </div>
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
         
            <br />

            <Button
              type="button"
              variant="contained"
              color="primary"
              style={{ width: "40%", height: "40px" }}
              onClick={this.submitHandle}
              >
                Log In 
            </Button>            
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Login;

