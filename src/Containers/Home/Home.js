import React from "react";
import "./Home.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Poll from "./../../Components/Poll/Poll";
import { Loader } from "./../../Components"
 import { firebaseApp } from "./../../Config/firebase";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      polls: [],
      loader: false
    };
  }

  // com
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/home");
      } else {
        this.props.history.push("/");
      }
    });

    let { polls, loader } = this.state;
    this.setState({
      loader: true
    })
    firebaseApp
      .database()
      .ref("poll")
      .on("child_added", (snap) => {
        let data = snap.val();
        data.uid = snap.key;
        polls.push(data);
        this.setState({
          polls,
          loader: false
        });
      })   
  }

  signOutHandler = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {})
      .catch(error => {});
  };

  render() {
    return (
      <div className="home">
        <Navbar signOut={this.signOutHandler} />
        <div className="poll_container">
          {
            this.state.loader ?
            <div>
              <br />
              <br />
            <Loader />
             </div> 
            :
          <Container maxWidth="sm">
            <br />
            <br />
            {this.state.polls &&
              this.state.polls.map((v, i) => {
                return <Poll key={i} index={v.uid} data={v} />;
              })}
          </Container>
            }
        </div>
      </div>
    );
  }
}

export default Home;
