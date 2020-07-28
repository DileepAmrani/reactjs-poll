import React from "react";
import "./Home.css"
import Navbar from "./../../Components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Poll from "./../../Components/Poll/Poll"
import {firebaseApp} from "./../../Config/firebase"
class Home extends React.Component {
  constructor(){
    super();
    this.state = {  
      polls: [
       
      ]
  }
  
}



// com
componentDidMount(){
  let {polls} = this.state
  // firebaseApp.database().ref("/").child('Polls').set(polls).then(()=>{
  //   alert("data added")
  // })

  firebaseApp.database().ref("polls").once("value" , (snap)=>{
    let data = snap.val();
    this.setState({
      polls:data
    })
  })
}


  render(){
    return (
      <div className="home">
        <Navbar />
          <div className="poll_container">
        <Container maxWidth="sm" >
        <br />
        <br />
            {
              this.state.polls.map((v,i)=>{
              return <Poll key={i} index={i} data={v}/>
              })
            }
    
        </Container>
          </div>
      </div>
    );
  }

}

export default Home;
