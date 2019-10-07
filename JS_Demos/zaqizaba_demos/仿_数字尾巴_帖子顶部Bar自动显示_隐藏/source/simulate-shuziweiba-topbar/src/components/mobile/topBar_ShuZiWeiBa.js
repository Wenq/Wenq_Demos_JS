/*
 * @Descripttion: 仿_数字尾巴_帖子顶部Bar自动显示_隐藏
 * @version: 
 * @Author: wenq
 * @Date: 2019-10-06 12:05:34
 * @LastEditors: wenq
 * @LastEditTime: 2019-10-07 15:42:04
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './topBar_ShuZiWeiBa.css';

class TopBar_ShuZiWeiBa extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showTopBar: true //是否显示顶部bar
        }
    }

    getEl(type, index) {
        switch (type) {
            case 0:
                return <li key={index}><p>让我们来回顾一下这个例子中发生了什么：
                我们调用 ReactDOM.render() 函数，并传入 作为参数。
                React 调用 Welcome 组件，并将作为 props 传入。
                Welcome 组件将 Hello, Sara 元素作为返回值。
                React DOM 将 DOM 高效地更新为 Hello, Sara。
                注意： 组件名称必须以大写字母开头。
                React 会将以小写字母开头的组件视为原生 DOM 标签。例如
                代表 HTML 的 div 标签，而 则代表一个组件，并且需在作用域内使用 Welcome。
                你可以在深入 JSX中了解更多关于此规范的原因。</p></li>
                break;
            default:
                return <li key={index}>
                    <div>我是图片</div>
                </li>
                break;
        }
    }

    getContent() {
        //模拟数据
        let els = [0, 1, 2, 0, 0, , 3, 5, 3, 4, 0, 6, 7, 0, 8, 0, 0, 9, 10, 0, 2, 3, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        return <ul>
            <li key={'space'}>{'我替topBar占位'}</li>
            {
                els.map((item, index) => {
                    return this.getEl(item, index)
                })
            }
        </ul>
    }

    onContentClick() {
        console.log(`onContentClick`)
        this.setState({
            showTopBar: !this.state.showTopBar
        })
    }

    onHandleTouchStart(e) {
        console.log(`touch start`);

        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);

        this._startX = e.changedTouches[0].pageX;
        this._startY = e.changedTouches[0].pageY;
        console.log('_startX', this._startX);
        console.log('_startY', this._startY);
    }

    onHandleTouchMove(e) {
        console.log(`touch move`);
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);

        this._moveX = e.changedTouches[0].pageX;
        this._moveY = e.changedTouches[0].pageY;
        console.log('_moveX', this._moveX);
        console.log('_moveY', this._moveY);

        let X = this._moveX - this._startX;
        let Y = this._moveY - this._startY;
        if (Math.abs(X) > Math.abs(Y) && X > 0) {// right
            console.log('向右');
        }
        else if (Math.abs(X) > Math.abs(Y) && X < 0) {// left
            console.log('向左');
        }
        else if (Math.abs(Y) > Math.abs(X) && Y > 0) {// down
            console.log('向下');
            this.setState({
                showTopBar: true
            })
        }
        else if (Math.abs(Y) > Math.abs(X) && Y < 0) {// up
            console.log('向上');
            this.setState({
                showTopBar: false
            })
        }
        else {//没有发生滑动
            console.log('没有发生滑动');
        }
    }

    onHandleTouchEnd(e) {
        console.log(`touch end`);
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);

        this._endX = e.changedTouches[0].pageX;
        this._endY = e.changedTouches[0].pageY;
        console.log('_moveX', this._endX);
        console.log('_endY', this._endY);
    }

    render() {
        let { style, className, ...others } = this.props;
        return <div
            style={style}
            className={'shuziweiba' + ' ' + className}
            {...others}
            onTouchStart={this.onHandleTouchStart.bind(this)}
            onTouchMove={this.onHandleTouchMove.bind(this)}
            onTouchEnd={this.onHandleTouchEnd.bind(this)}
        >
            <div className={'topbar' + (this.state.showTopBar ? '' : ' ' + 'noheight')}>
                <i>{'<'}</i>
                <div>
                    <i>{'🎆'}</i>
                    <i>{'🗑'}</i>
                </div>
            </div>
            <div className='content' onClick={this.onContentClick.bind(this)}>
                {
                    this.getContent()
                }
            </div>
            <div className='bottombar'>
                <input type='text' placeholder={'说点什么...'}></input>
                <div>
                    <i>{'❤' + ' 12'}</i>
                    <i>{'🗯' + ' 1'}</i>
                </div>
            </div>
        </div>
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