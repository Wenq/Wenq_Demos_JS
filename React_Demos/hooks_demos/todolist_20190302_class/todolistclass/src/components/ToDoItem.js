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
        this.props.onCheckChange && this.props.onCheckChange(item.get('id'), this.isDone(item));
    }

    onChange(e) { }

    //单击删除图标
    onDelClick(e) {
        let { item } = this.props;
        this.props.onDelClick && this.props.onDelClick(item.get('id'), this.isDone(item));
    }

    //是否是已办项
    isDone(item) {
        if (item) {
            return item.get('done') === true;
        }
        return false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        let oldItem = this.props.item;
        let newItem = nextProps.item;
        return oldItem.get('id') !== newItem.get('id') && oldItem.get('done') !== newItem.get('done');
    }

    render() {
        let { style, className, item = new Map(), onCheckChange, onDelClick, ...others } = this.props;
        let rootClassName = `todoitem ${className} ` + (this.isDone(item) ? 'todoitem_done' : '');
        return <li className={rootClassName} style={style} {...others}>
            <input type='checkbox' className={'todoitem_check'} onClick={this.onCheckChange}
                checked={item.get('done')} onChange={this.onChange} />
            <span className='todoitem_title'>{item.get('title') || 'no title'}</span>
            <span className='todoitem_date'>{item.get('date') || 'no date'}</span>
            <img alt='delete' title={'delete item'} className={'todoitem_del'} src={del} onClick={this.onDelClick} />
        </li>
    }
}

export default ToDoItem;