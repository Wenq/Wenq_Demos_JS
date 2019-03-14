//已办组件
import React, { Component } from 'react';
import './DoneItem.css';

class DoneItem extends Component {

    onCheckChange(e){
        this.props.onCheckChange&&this.props.onCheckChange(false);
    }

    render() {
        let { style, className, title, date, onCheckChange, ...others } = this.props;
        return <div className={'doneitem' + ' ' + className} style={style} {...others}>
                <input type='checkbox' className={'doneitem_check'} onChange={this.onCheckChange} checked={true}/>
                <span className='doneitem_title'>{title||'无'}</span>
                <span className='doneitem_date'>{date||'3/14'}</span>
        </div>
    }
}

export default DoneItem;