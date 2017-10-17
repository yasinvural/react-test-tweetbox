import React, {Component} from 'react';
import './TweetBox.css';


export default class TweetBox extends Component {
    render(){
        return(
            <div className="js-tweetbox-container">
                <div className="js-tweetbox-header-container">
                    <div className="js-tweetbox-header">Yeni Tweet Oluştur</div>
                    <div className="js-tweetbox-close">x</div>
                </div>
                <div className="js-tweetbox-body-container">
                    <div className="js-textbox-container">
                        <input type="text" disabled={this.props.disabled} onKeyDown={this.props.handleKeyDown} onChange={this.props.handleChange} placeholder="Neler oluyor?" />
                    </div>
                </div>
                <div className="js-tweetbox-footer-container">
                    <div className="js-left-container">
                        <input type="button" className="js-select-file-button" value="Seç" />
                    </div>
                    <div className="js-right-container">
                        <input type="button" className={`js-tweet-button ${this.props.buttonClassName}`} value="Tweetle" />                    
                        <span className="js-tweet-length">{this.props.tweetLength}</span>
                    </div>
                </div>
            </div>
        );
    }
}