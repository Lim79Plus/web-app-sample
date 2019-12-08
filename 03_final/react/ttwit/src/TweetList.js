import React from 'react';
import "./TweetList.css";
import Tweet from "./Tweet";

class TweetList extends React.Component {

    render() {
        let tweets = [];

        this.props.tweets.forEach((data) => {
            let tw = (<Tweet data={data}/>);
            tweets.push(tw);
        });

        let footer = <div></div>;
        if(this.props.isMax){
            footer = <div className="max">これ以上過去のツイートはありません</div>
        } else {
            footer = <div className="max max_anim">過去のツイートを取得中..</div>
        }

        return (<div id="tweetList" className="column_tweet" onScroll={this.props.onScrollListener}>
            {tweets}
            {footer}
        </div>);
    }


};

export default TweetList;
