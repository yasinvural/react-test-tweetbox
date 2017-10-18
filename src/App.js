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
          "tweetText":"",
          "disabledTyping":false,
          "buttonClassName": "js-disabled"
      };
      this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (e) =>{
      var lengthOfTweet = e.target.value.length;

      if(lengthOfTweet <= this.state.defaultLengthOfTweet){
            this.setState({
              "tweetLength": this.state.defaultLengthOfTweet-lengthOfTweet,
              "tweetText": e.target.value
            }, ()=>{
                  this.setState({
                    "buttonClassName": this.state.tweetLength < this.state.defaultLengthOfTweet ? "js-enabled" : "js-disabled"
                  });
            });
      }
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
                  tweetText = {this.state.tweetText}
                  handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
