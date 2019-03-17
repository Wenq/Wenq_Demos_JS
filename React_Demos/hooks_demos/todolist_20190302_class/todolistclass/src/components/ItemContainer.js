//代办项容器，有title行
import React, { Component } from 'react';
import './ItemContainer.css';

class ItemContainer extends Component {
    render() {
        let { style, className, title, children, titleStyle, ...others } = this.props;
        return <div className={'itemcontainer' + ' ' + className} style={style} {...others}>
            <span style={titleStyle} className={'itemcontainer_title'}>{title || 'ItemContainer'}</span>
            {children}
        </div>
    }
}

export default ItemContainer;