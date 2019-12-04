import React from 'react';
import './App.css';
import TweetList from "./TweetList";
import Menu from "./Menu";
import Extra from "./Extra";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "latest": 10,
            "tweets": []
        }

    }

    componentDidMount() {
        fetch("http://localhost:8080/msg")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        "tweets": result
                    });
                },
                (error) => {
                    this.setState({
                        "tweets": [{
                            "id": 0,
                            "title": "エラー",
                            "description": error,
                        }]
                    });
                }
            )
    }

    componentDidUpdate() {
        let list = document.getElementById("tweetList");
        list.scrollTo({
            top: list.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    refresh(latest) {
        let isMax = false;

        const tweets = this.state.tweets;
        if (latest >= tweets.length) {
            latest = tweets.length - 1;
            isMax = true;
        }
        this.setState({
            "latest": latest,
            "tweets": tweets.slice(0, latest),
            "isMax": isMax
        })
    }

    render() {

        return (
            <div className="App">
                <Menu
                    onRefreshClicked={(() => {
                        this.refresh(this.state.latest + 1);
                    }).bind(this)}
                    onToTopClicked={(() => {
                        let list = document.getElementById("tweetList");
                        list.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }).bind(this)}
                />
                <TweetList
                    tweets={this.state.tweets}
                    isMax={this.state.isMax}
                />
                <Extra/>
            </div>
        );
    }

}

export default App;
