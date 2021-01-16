import React, { Component } from 'react';
import Header from './Components/header';
import Quiz from './Components/quiz';
import Welcome from './Components/Welcome'
import './sass/App.scss';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      quizShow: false,
      welcomeShow: true
    }    
  }
  changeShowState = () =>{
    this.setState({
      quizShow: true,
      welcomeShow: false
    })
  }
  render() { 
      return (
        <div className="App">
          <Header/>
          {this.state.quizShow  && <Quiz/>}
          {this.state.welcomeShow  && <Welcome quizShow = {this.changeShowState}/>}
        </div>
      );}    
}

export default App;
