/**
 * 主页组件
 * 2019-03-10
 */

import React, { Component } from 'react';
//  import * as styles from './Main.css';
import './Main.css';
import InputComponent from './components/InputComponent';
import ItemContainer from './components/ItemContainer';
import ToDoItem from './components/ToDoItem';
import DoneItem from './components/DoneItem';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            todoItemList: [1, 2, 3],
            doneItemList: [4, 5, 6]
        }

        this.onTxtChange = this.onTxtChange.bind(this);
        this.onTxtKeyDown = this.onTxtKeyDown.bind(this);
    }

    onTxtChange(value) {
        this.setState({ value });
    }

    onTxtKeyDown(e) {
        if (e.keyCode === 13) {//enter
            alert(e.target.value);
        }
    }

    render() {
        // let todoItemList = [1,2,3];
        // let doneItemList = [4,5,6];
        let { style, className, ...others } = this.props;
        return <div className={'main' + ' ' + className} style={style} {...others}>
            <span className='title'>todolist class 版本实现</span>
            <InputComponent 
            style={{ 'margin': '10px 0px 10px 0px' }} 
            value={this.state.value} 
            onChange={this.onTxtChange} 
            onKeyDown={this.onTxtKeyDown}
            placeholder={'请输入待办事项  [回车快速添加]'} 
            />
            <ItemContainer title={'待处理: '} items={[]} titleStyle={{ 'color': 'green' }}
                style={{ 'margin': '10px 0px 10px 0px', 'border': '1px solid green' }}>
                {
                    this.state.todoItemList && this.state.todoItemList.map((item, index) => {
                        return <ToDoItem key={index} style={{ 'magin': '10px' }} />
                    })
                }
            </ItemContainer>
            <ItemContainer title={'已完成: '} items={[]} titleStyle={{ 'color': 'gray' }}
                style={{ 'border': '1px solid gray' }}>
                {
                    this.state.doneItemList && this.state.doneItemList.map((item, index) => {
                        return <DoneItem key={index} style={{ 'magin': '10px' }} />
                    })
                }
            </ItemContainer>
        </div>
    }
}

export default Main;