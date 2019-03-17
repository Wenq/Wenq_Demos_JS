//代办项组件
import React, { Component } from 'react';
import './ToDoItem.css';
import del from './img/del.jpg';

class ToDoItem extends Component {
    constructor(props) {
        super(props)

        this.onCheckChange = this.onCheckChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelClick = this.onDelClick.bind(this);
    }

    onCheckChange(e) {
        let { item } = this.props;
        this.props.onCheckChange && this.props.onCheckChange(item.id);
    }

    onChange(e) { }

    onDelClick(e) {
        let {item} = this.props;
        this.props.onChange && this.props.onChange(item.id);
    }

    render() {
        let { style, className, item = {}, onCheckChange, ...others } = this.props;
        return <div className={`todoitem ${className}`} style={style} {...others}>
            <input type='checkbox' className={'todoitem_check'} onClick={this.onCheckChange}
                checked={item.do} onChange={this.onChange} />
            <span className='todoitem_title'>{item.title || '无'}</span>
            <span className='todoitem_date'>{item.date || '3/14'}</span>
            <img alt='delete' className={'todoitem_del'} src={del} onClick={this.onDelClick} />
        </div>
    }
}

export default ToDoItem;