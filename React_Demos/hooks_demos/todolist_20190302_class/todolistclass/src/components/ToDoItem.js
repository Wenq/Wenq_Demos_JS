//代办项组件
import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        let { style, className, ...others } = this.props;
        return <div className={'todoitem' + ' ' + className} style={style} {...others}>ToDoItem</div>
    }
}

export default ToDoItem;