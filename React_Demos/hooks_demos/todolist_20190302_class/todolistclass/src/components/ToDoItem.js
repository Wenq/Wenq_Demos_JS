//代办项组件
import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        let { style, className, title, date, onCheckChange, ...others } = this.props;
        return <div className={'todoitem' + ' ' + className} style={style} {...others}>
            <input type='checkbox' className={'todoitem_check'} onChange={onCheckChange} />
            <span className='todoitem_title'>{title || '无'}</span>
            <span className='todoitem_date'>{date || '3/14'}</span>
        </div>
    }
}

export default ToDoItem;