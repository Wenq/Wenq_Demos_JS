//代办项容器，有title行
import React, { Component } from 'react';
import './ItemContainer.css';

class ItemContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collapse: props.collapse || false //是否折叠
        }
    }
    render() {
        let { style, className, title, children, titleStyle, ...others } = this.props;
        return <div className={'itemcontainer' + ' ' + className} style={style} {...others}>
            {
                !!title ? <h2 style={titleStyle} className={'itemcontainer_title'}>{title || 'ItemContainer'}</h2> : null
            }
            {children}
        </div>
    }
}

export default ItemContainer;