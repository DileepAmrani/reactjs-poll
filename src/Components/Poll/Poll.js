import React  from 'react';
import Poll from 'react-polls';
import Paper from '@material-ui/core/Paper';
import "./Poll.css"

import {firebaseApp} from "./../../Config/firebase"

// Declaring poll question and answers
// const pollQuestion = 'Is react-polls useful?'
// const pollAnswers = [
//   { option: 'Yes', votes: 0 },
//   { option: 'No', votes: 0 }
// ]


const pollStyles1 = {
    questionSeparator: true,
    questionSeparatorWidth: 'question',
    questionBold: true ,
    questionColor: '#303030',
    align: 'center',
    theme: 'purple'
  }
 
class PollComponent extends React.Component {  
    
    constructor(){
        super();
        this.state={
            pollAnswers:[]
        }
    }


    async componentDidMount(){
        let pollAnswers = this.props.data.pollAnswers
        this.setState({
        pollAnswers: [...pollAnswers]
        })
    }
  handleVote = (voteAnswer,data,i) => {
      console.log(voteAnswer,data,i)
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer){
        answer.votes++
        firebaseApp.database().ref(`poll/${i}`).update({pollAnswers}).then(()=>{
            alert("data updated")
        })
        return answer
      }
    
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
 
  render () {
    return (
      <div >
          <Paper className="poll-card">
              <Poll customStyles={pollStyles1} question={this.props.data.pollQuestion} answers={this.props.data.pollAnswers} onVote={(e)=>this.handleVote(e,this.props.data,this.props.index)} />
          </Paper>
      </div>
    );
  }
};

export default PollComponent