import React from 'react';
import './App.css';
import TweetList from "./TweetList";
import Menu from "./Menu";
import Extra from "./Extra";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "depth": 15,
            "tweets": [],
            "max": 0,
            "isBusy": false,
        }

    }

    getErrorLog(error) {
        return [{
            "id": 0,
            "title": "エラー",
            "description": error,
        }]
    }

    async getTweets() {
        const oldest = this.state.max - this.state.depth;
        this.setState({
            isBusy: true
        });
        await fetch("http://localhost:8080/msg/" + oldest + "-" + this.state.max)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isBusy: false,
                        tweets: result.reverse()
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        tweets: this.getErrorLog(error)
                    });
                }
            );
    }

    async componentDidMount() {
        await fetch("http://localhost:8080/msg/max")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        "max": result.max
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        "tweets": this.getErrorLog(error)
                    });
                }
            );
        await this.getTweets();

    }

    componentDidUpdate() {
        /*
        let list = document.getElementById("tweetList");
        list.scrollTo({
            top: list.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
         */
    }

    async getOlderTweets(num) {
        let isMax = false;
        let depth = this.state.depth + num;

        if (depth >= this.state.max) {
            depth = this.state.max;
            isMax = true;
        }

        this.setState({
            "depth": depth,
        });

        //動きを見せるための無駄な待機
        await new Promise(resolve => setTimeout(resolve, 2500));

        await this.getTweets();

        this.setState({
            "isMax": isMax,
        });

    }

    render() {

        return (
            <div className="App">
                <Menu
                    onRefreshClicked={(() => {
                        this.getOlderTweets(5);
                    })}
                    onToTopClicked={(() => {
                        let list = document.getElementById("tweetList");
                        list.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    })}
                />
                <TweetList
                    tweets={this.state.tweets}
                    isMax={this.state.isMax}
                    onScrollListener={((e) => {
                        if (this.state.busy) {
                            return;
                        }
                        let elm = document.getElementById("tweetList");
                        console.log(elm.scrollHeight - elm.scrollTop - elm.offsetHeight);
                        if ( elm.scrollHeight - elm.scrollTop - elm.offsetHeight < 10){
                            this.getOlderTweets(5);
                        }
                    }).bind(this)}
                />
                <Extra/>
            </div>
        );
    }

}

export default App;
