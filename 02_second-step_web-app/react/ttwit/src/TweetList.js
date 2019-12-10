import React from 'react';
import "./TweetList.css";
import Tweet from "./Tweet";

class TweetList extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        let tweets = [];

        this.props.tweets.forEach((data) => {
            console.log("TweetList:", data)
            let tw = (<Tweet data={data}/>);
            tweets.push(tw);
        });

        let footer = <div></div>;
        if(this.props.isMax){
            footer = <div className="max">これ以上過去のツイートはありません</div>
        }

        return (<div id="tweetList" className="column_tweet">
            {tweets}
            {footer}
        </div>);
    }


};

export default TweetList;
