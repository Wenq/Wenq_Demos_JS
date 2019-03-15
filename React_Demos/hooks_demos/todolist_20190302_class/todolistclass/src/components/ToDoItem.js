//代办项组件
import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        let { style, className, item={}, onCheckChange, ...others } = this.props;
        return <div className={`todoitem ${className}`} style={style} {...others}>
            <input type='checkbox' className={'todoitem_check'} onChange={onCheckChange} />
            <span className='todoitem_title'>{item.title || '无'}</span>
            <span className='todoitem_date'>{item.date || '3/14'}</span>
        </div>
    }
}

export default ToDoItem;