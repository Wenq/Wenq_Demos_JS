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
    render() {
        let todoItemList = [1,2,3];
        let doneItemList = [4,5,6];
        return <div className='main'>
            <span className='title'>todolist class 版本实现</span>
            <InputComponent />
            <ItemContainer title={'待处理'} items={[]}>
                {
                    todoItemList && todoItemList.map((item, index) => {
                        return <ToDoItem key={index} />
                    })
                }
            </ItemContainer>
            <ItemContainer title={'已完成'} items={[]}>
                {
                    doneItemList && doneItemList.map((item, index) => {
                        return <DoneItem key={index} />
                    })
                }
            </ItemContainer>
        </div>
    }
}

export default Main;