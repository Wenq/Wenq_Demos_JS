//代办项容器，有title行
import React, { Component } from 'react';
import './ItemContainer.css';

class ItemContainer extends Component {
    render() {
        return <div className='main'>
            <span>{this.props.title||'ItemContainer'}</span>
            {this.props.children}
        </div>
    }
}

export default ItemContainer;