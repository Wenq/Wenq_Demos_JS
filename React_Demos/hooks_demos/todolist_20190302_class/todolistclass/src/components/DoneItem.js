//已办组件
import React, { Component } from 'react';
import './DoneItem.css';
import del from './img/del.jpg';

class DoneItem extends Component {
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
        let { item } = this.props;
        this.props.onDelClick && this.props.onDelClick(item.id, true);
    }

    render() {
        let { style, className, item = {}, onCheckChange, onDelClick, ...others } = this.props;
        return <div className={`doneitem ${className}`} style={style} {...others}>
            <input type='checkbox' className={'doneitem_check'} onClick={this.onCheckChange}
                checked={item.do} onChange={this.onChange} />
            <span className='doneitem_title'>{item.title || '无'}</span>
            <span className='doneitem_date'>{item.date || '3/14'}</span>
            <img alt='delete' className={'todoitem_del'} src={del} onClick={this.onDelClick} />
        </div>
    }
}

export default DoneItem;