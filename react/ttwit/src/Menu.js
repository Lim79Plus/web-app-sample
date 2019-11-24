import React from 'react';
import "./Menu.css"

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    refresh(){
        this.props.onRefreshClicked();
    }

    toTop(){
        this.props.onToTopClicked();
    }

    render() {
        return (<div className="column">
            <div className="button" onClick={(()=>{this.toTop()}).bind(this)}>最新のツイート</div>
            <div className="button" onClick={(()=>{this.refresh()}).bind(this)}>過去のツイート</div>
        </div>);
    }
};

export default Menu;