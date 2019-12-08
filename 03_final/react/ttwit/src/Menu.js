import React from 'react';
import "./Menu.css"

class Menu extends React.Component {

    refresh(){
        this.props.onRefreshClicked();
    }

    toTop(){
        this.props.onToTopClicked();
    }

    render() {
        return (<div className="column">
            <div className="button" onClick={(()=>{this.toTop()})}>最新のツイート</div>
            <div className="button" onClick={(()=>{this.refresh()})}>過去のツイート</div>
        </div>);
    }
};

export default Menu;