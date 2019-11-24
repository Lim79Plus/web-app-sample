import React from 'react';
import "./Tweet.css";
import icon from "./icons/gotoba.png";

class Tweet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "data": props.data
        };
    };

    render() {
        return (
            <div className="tweet" key={this.state.data.id}>
                <div className="container">
                    <div className="iconColumn">
                        <img className="icon" src={"http://knights.ton-katsu.net/playtime/works" + this.state.data.path}/>
                    </div>
                    <div className="contentColumn">
                        <div className="user">{this.state.data.title}</div>
                        <article className="content">{this.state.data.description}</article>
                    </div>
                </div>
                <hr/>
            </div>);
    }


};

export default Tweet;