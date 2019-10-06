/*
 * @Descripttion: 仿_数字尾巴_帖子顶部Bar自动显示_隐藏
 * @version: 
 * @Author: wenq
 * @Date: 2019-10-06 12:05:34
 * @LastEditors: wenq
 * @LastEditTime: 2019-10-06 13:45:10
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './topBar_ShuZiWeiBa.css';

class TopBar_ShuZiWeiBa extends Component {
    getEl(type, index){
        switch(type){
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
                    <div className='simage'>我是图片</div>
                </li>
                break;
        }
    }
    getContent(){
        let els = [0,1,2,0,0,,3,5,3,4,0,6,7,0,8,0,0,9,10,0,2,3,0,5,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]
        return <ul>
        {
            els.map((item, index)=>{
                return this.getEl(item,index)
            })
        }
        </ul>
    }
    render() {
        let { style, className, ...others } = this.props;
        return <div style={style} className={'shuziweiba' + ' ' + className} {...others}>
            <div className='topbar'>
                <i className='exit'>{'<'}</i>
                <div>
                    <i>{'🎆'}</i>
                    <i>{'🗑'}</i>
                </div>
            </div>
            <div className='content'>
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