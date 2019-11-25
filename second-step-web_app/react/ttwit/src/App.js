import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TweetList from "./TweetList";
import Menu from "./Menu";
import Extra from "./Extra";
import SampleC from "./sampleC";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "latest": 10,
            "tweets": SampleC.slice(0, 10)
        }

    }

    componentDidUpdate() {
        let list = document.getElementById("tweetList");
        list.scrollTo({
            top: list.scrollHeight,
            left:  0,
            behavior: 'smooth'
        });
    }

    refresh(latest) {
        let isMax = false;
        if(latest >= SampleC.length){
            console.log("max");
            latest = SampleC.length - 1;
            isMax = true;
        }
        this.setState({
            "latest": latest,
            "tweets": SampleC.slice(0, latest),
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
