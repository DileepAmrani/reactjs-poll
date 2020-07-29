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

  firebaseApp.database().ref("poll").on("child_added" , (snap)=>{
    let data = snap.val();
    data.uid =  snap.key
    polls.push(data)
    this.setState({
      polls
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
             this.state.polls && this.state.polls.map((v,i)=>{
              return <Poll key={i} index={v.uid} data={v}/>
              })
            }
    
        </Container>
          </div>
      </div>
    );
  }

}

export default Home;
