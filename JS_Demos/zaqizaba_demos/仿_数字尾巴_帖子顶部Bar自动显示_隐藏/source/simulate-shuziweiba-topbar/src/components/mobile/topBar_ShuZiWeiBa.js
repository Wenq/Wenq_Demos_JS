/*
 * @Descripttion: 仿_数字尾巴_帖子顶部Bar自动显示_隐藏
 * @version: 
 * @Author: wenq
 * @Date: 2019-10-06 12:05:34
 * @LastEditors: wenq
 * @LastEditTime: 2019-10-06 12:20:11
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopBar_ShuZiWeiBa extends Component {
    render() {
        let { style, className, ...others } = this.props;
        return <div>TopBar_ShuZiWeiBa</div>
    }
}

TopBar_ShuZiWeiBa.defaultProps = {
    style: {},
    className: ''
}
TopBar_ShuZiWeiBa.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
}
export default TopBar_ShuZiWeiBa;