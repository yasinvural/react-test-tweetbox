import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './TweetBox';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
          "defaultLengthOfTweet": 140,
          "tweetLength": 140,
          "buttonClassName": "js-disabled",
          "disabledTyping":false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
  }


  handleChange = (e) =>{
      var lengthOfTweet = e.target.value.length;  
      this.setState({
        "tweetLength": this.state.defaultLengthOfTweet-lengthOfTweet        
      }, ()=>{
        this.setState({
          "buttonClassName": this.state.tweetLength < this.state.defaultLengthOfTweet ? "js-enabled" : "js-disabled"
          // "disabledTyping": this.state.tweetLength === 0 ? true : false
        });
      });
  }

  handleKeyDown(e){
      // switch(e.keyCode){
      //   case 8:
      //     this.setState({
      //       "disabledTyping": this.state.tweetLength === 0 ? true : false
      //     })
      //   break;
      //   case 46:
      //     this.setState({
      //       "disabledTyping": this.state.tweetLength === 0 ? true : false
      //     })
      //   break;
      //   default:

      // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Tweetbox</h1>
        </header>
        <TweetBox buttonClassName={this.state.buttonClassName}
                  disabled={this.state.disabledTyping}
                  tweetLength={this.state.tweetLength} 
                  handleKeyDown={this.handleKeyDown}
                  handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
