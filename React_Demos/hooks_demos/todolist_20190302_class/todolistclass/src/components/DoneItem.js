//已办组件
import React, { Component } from 'react';
import './DoneItem.css';

class DoneItem extends Component {
    render() {
        let { style, className, ...others } = this.props;
        return <div className={'doneitem' + ' ' + className} style={style} {...others}>DoneItem</div>
    }
}

export default DoneItem;