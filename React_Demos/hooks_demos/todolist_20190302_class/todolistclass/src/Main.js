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
import { getDate } from './utils/commonUtil';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            todoItemList: [{ id: 1, title: '1', date: '03/12', do: false }, { id: 2, title: '2', date: '03/05', do: false }, { id: 3, title: '3', date: '03/15', do: false }],
            doneItemList: [{ id: 4, title: '4', date: '03/11', do: true }, { id: 5, title: '5', date: '03/12', do: true }, { id: 6, title: '6', date: '03/09', do: true }, { id: 7, title: '7', date: '03/12', do: true }, { id: 8, title: '8', date: '03/12', do: true }]
        }

        this.onTxtChange = this.onTxtChange.bind(this);
        this.onTxtKeyDown = this.onTxtKeyDown.bind(this);
        this.onDoneItemChange = this.onDoneItemChange.bind(this);
        this.onToDoItemChange = this.onToDoItemChange.bind(this);
    }

    //搜索框文本change事件
    onTxtChange(value) {
        this.setState({ value });
    }

    //搜索框按键事件
    onTxtKeyDown(e) {
        if (e.keyCode === 13) {//enter
            // alert(e.target.value);
            let title = e.target.value;
            if(title.trim()===''){
                console.warn(`blank string, cancel...`);
                return;
            }

            let newToDOItem = {
                id: '',
                title: title,
                date: getDate(),
                do: false
            };
            let todoItemList = this.state.todoItemList;
            todoItemList.push(newToDOItem);
            this.setState({
                todoItemList : todoItemList,
                value: ''
            });
        }
    }

    //点击已完成item
    onDoneItemChange(id) {
        let doneItemList = this.state.doneItemList;
        let target = doneItemList.find(item => { return item.id === id });
        if (target) {
            doneItemList.splice(doneItemList.indexOf(target), 1);
            target.do = true;
            let todoItemList = this.state.todoItemList;
            todoItemList.push(target);
            this.setState({
                todoItemList: todoItemList,
                doneItemList: doneItemList
            });
        }
    }

    //点击待办item
    onToDoItemChange(id) {
        let todoItemList = this.state.todoItemList;
        let target = todoItemList.find(item => { return item.id === id });
        if (target) {
            todoItemList.splice(todoItemList.indexOf(target), 1);
            target.do = true;
            let doneItemList = this.state.doneItemList;
            doneItemList.push(target);
            this.setState({
                todoItemList: todoItemList,
                doneItemList: doneItemList
            });
        }
    }

    render() {
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
            <ItemContainer title={'待处理: '} titleStyle={{ 'color': 'green', 'fontSize': '16px' }}
                style={{ 'margin': '10px 0px 10px 0px', 'border': '1px solid green' }}>
                {
                    this.state.todoItemList && this.state.todoItemList.map((item, index) => {
                        return <ToDoItem key={index} style={{ 'magin': '10px' }} item={item}
                            onCheckChange={this.onToDoItemChange} />
                    })
                }
            </ItemContainer>
            <ItemContainer title={'已完成: '} titleStyle={{ 'color': 'gray', 'fontSize': '16px' }}
                style={{ 'border': '1px solid gray' }}>
                {
                    this.state.doneItemList && this.state.doneItemList.map((item, index) => {
                        return <DoneItem key={index} style={{ 'magin': '10px' }} item={item}
                            onCheckChange={this.onDoneItemChange} />
                    })
                }
            </ItemContainer>
        </div>
    }
}

export default Main;