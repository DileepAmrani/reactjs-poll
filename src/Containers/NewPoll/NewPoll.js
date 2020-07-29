import React from "react";
import { Link } from "react-router-dom"
import Navbar from "./../../Components/Navbar/Navbar";
// import "./Login.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {firebaseApp} from "./../../Config/firebase"

class Dashboard extends React.Component {

  constructor(){
    super();
    this.state={
      pollQuestion:'',
      pollAnswers:[],
    

    }
  }


  handelChange = (e)=>{
    this.setState({
      [e.target.name]:{
        votes:0,
        option:e.target.value
      }
    })
  }


  // handelAdd

  handelAdd=()=>{
    let {pollQuestion,pollAnswers,Option1,Option2,Option3,Option4} = this.state
    pollAnswers.push(Option1,Option2,Option3,Option4);

    firebaseApp.database().ref(`poll`).push({pollQuestion,pollAnswers}).then(()=>{
      alert("data added")
      this.setState({
        pollAnswers:[],
        pollQuestion:"",
        Option1:"",Option2:"",Option3:"",Option4:""
      })
    })

    



  }


  render() {

    let {pollQuestion,pollAnswers,Option1,Option2,Option3,Option4} = this.state

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
              value={pollQuestion}
              id="question"
              label="Enter Question"
              name="pollQuestion"
              autoComplete="question"
              onChange={(e)=>this.setState({
                pollQuestion:e.target.value
              })}
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option1"
              value= { Option1 && Option1.option}

              label="Option 1"
              onChange={this.handelChange}

              type="text"
              id="Option-1"
              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              value={ Option2 && Option2.option}

              fullWidth
              name="Option2"
              label="Option 2"
              type="text"
              id="Option-2"
              onChange={this.handelChange}

              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option3"
              value={Option3 && Option3.option}

              label="Option 3"
              type="text"
              id="Option-3"
              onChange={this.handelChange}

              autoComplete="current-password"
            />
            <br />
            <br />
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Option4"
              label="Option 4"
              value={ Option4 && Option4.option}

              type="text"
              id="Option-4"
              onChange={this.handelChange}
              autoComplete="current-password"
            />
            <br />
            <br />


            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "40%", height: "40px" }}

              onClick={this.handelAdd}
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

