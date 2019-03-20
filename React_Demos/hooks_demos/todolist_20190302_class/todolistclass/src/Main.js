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
// import DoneItem from './components/DoneItem';
import { getDate, createId } from './utils/commonUtil';
import { setStorage, getStorage, clearStorage } from './utils/storageUtil';
import { Map, List, fromJS, toJS } from 'immutable';

//常量
// const STORAGE_ID = 'todolist';
const STORAGE_ID_TODOITEM_LIST = 'todoItemList';
const STORAGE_ID_DONEITEM_LIST = 'doneItemList';

//测试数据
let TODOITEM_LIST_TEST_DATA = [{ id: 'dfdfdf', title: '1', date: '03/12', done: false }, { id: 'xxxx', title: '2', date: '03/05', done: false }, { id: 'cgsdf', title: '3', date: '03/15', done: false }];
let DONEITEM_LIST_TEST_DATA = [{ id: 'sdfsdf', title: '4', date: '03/11', done: true }, { id: 'dfdfsd', title: '5', date: '03/12', done: true }, { id: 'gggg', title: '6', date: '03/09', done: true }, { id: 'eeeee', title: '7', date: '03/12', done: true }, { id: 'dddgdg', title: '8', date: '03/12', done: true }];
TODOITEM_LIST_TEST_DATA = fromJS(TODOITEM_LIST_TEST_DATA);
DONEITEM_LIST_TEST_DATA = fromJS(DONEITEM_LIST_TEST_DATA);

class Main extends Component {
    constructor(props) {
        super(props)

        let InitStateObj = {
            value: '',
            todoItemList: new List(),
            doneItemList: new List()
        }

        //localStorage中存储的用户数据，取出用于初始化数据
        // let localData = getStorage(STORAGE_ID);
        // console.log(`todolist-> localData: ${JSON.stringify(localData)}`);
        let todoItemList_data = getStorage(STORAGE_ID_TODOITEM_LIST);
        let doneItemList_data = getStorage(STORAGE_ID_DONEITEM_LIST);
        console.log(`init todoItemList_data: ${JSON.stringify(todoItemList_data)}`);
        console.log(`init doneItemList_data: ${JSON.stringify(doneItemList_data)}`);
        if (todoItemList_data || doneItemList_data) {
            //用本地存储数据初始化
            InitStateObj.todoItemList = fromJS(todoItemList_data) || new List();
            InitStateObj.doneItemList = fromJS(doneItemList_data) || new List();
        } else {
            //测试数据初始化
            InitStateObj.todoItemList = TODOITEM_LIST_TEST_DATA;
            InitStateObj.doneItemList = DONEITEM_LIST_TEST_DATA;
        }

        this.state = InitStateObj;

        //输入框
        this.onTxtChange = this.onTxtChange.bind(this);
        this.onTxtKeyDown = this.onTxtKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        //已办
        // this.onDoneItemChange = this.onDoneItemChange.bind(this);
        //待办
        this.onToDoItemChange = this.onToDoItemChange.bind(this);
        this.onItemDelClick = this.onItemDelClick.bind(this);
        //测试
        this.onClearAllBtnClick = this.onClearAllBtnClick.bind(this);
        this.onAdd10KBtnClick = this.onAdd10KBtnClick.bind(this);
        this.onSaveLocalDataClick = this.onSaveLocalDataClick.bind(this);
        this.onClearLocalDataClick = this.onClearLocalDataClick.bind(this);
    }

    //搜索框文本change事件
    onTxtChange(value) {
        this.setState({ value });
    }

    //搜索框按键事件
    onTxtKeyDown(e) {
        if (e.keyCode === 13) {//enter
            // alert(this.state.value);
            this.doAddToDoItem();
        }
    }

    //点击增加按钮
    onClick(e) {
        this.doAddToDoItem();
    }

    //逻辑：增加一个待办项
    doAddToDoItem() {
        let title = this.state.value;
        if (title.trim() === '') {
            console.log(`blank string, cancel...`);
            return;
        }

        let newToDOItem = this.getNewToDoItem({
            title: title,
            date: getDate()
        });
        let todoItemList = this.state.todoItemList;
        todoItemList.push(newToDOItem);
        this.setState({
            todoItemList: todoItemList,
            value: ''
        });
    }

    //生产一个新的待办项
    getNewToDoItem({ id, title, date }) {
        return {
            id: id === undefined ? createId() : id,
            title: title || 'no data',
            date: date || getDate(),
            do: false
        }
    }

    //点击已完成item
    // onDoneItemChange(id) {
    //     let doneItemList = this.state.doneItemList;
    //     let target = doneItemList.find(item => { return item.id === id });
    //     if (target) {
    //         doneItemList.splice(doneItemList.indexOf(target), 1);
    //         target.do = true;
    //         let todoItemList = this.state.todoItemList;
    //         todoItemList.push(target);
    //         this.setState({
    //             todoItemList: todoItemList,
    //             doneItemList: doneItemList
    //         });
    //     }
    // }

    //点击待办item
    onToDoItemChange(id, isDone) {
        if (isDone) {
            //由已办到待办
            let doneItemList = this.state.doneItemList;
            let target = doneItemList.find(item => { return item.id === id });
            if (target) {
                doneItemList.splice(doneItemList.indexOf(target), 1);
                target.done = false;
                let todoItemList = this.state.todoItemList;
                todoItemList.push(target);
                this.setState({
                    todoItemList: todoItemList,
                    doneItemList: doneItemList
                });
            }
        } else {
            //由待办到已办
            let todoItemList = this.state.todoItemList;
            let target = todoItemList.find(item => { return item.id === id });
            if (target) {
                todoItemList.splice(todoItemList.indexOf(target), 1);
                target.done = true;
                let doneItemList = this.state.doneItemList;
                doneItemList.push(target);
                this.setState({
                    todoItemList: todoItemList,
                    doneItemList: doneItemList
                });
            }
        }
    }

    //点击删除图标
    onItemDelClick(id, isDone) {
        let doList = isDone ? this.state.doneItemList : this.state.todoItemList;
        let target = doList.find(item => { return id === item.id });
        if (target) {
            doList.splice(doList.indexOf(target), 1);
            if (isDone) {
                this.setState({
                    doneItemList: doList
                });
            } else {
                this.setState({
                    todoItemList: doList
                });
            }
        }
    }

    //清空所有待办项
    onClearAllBtnClick() {
        this.setState({
            todoItemList: [],
            doneItemList: []
        });
    }

    //增加测试数据，1万条数据.
    onAdd10KBtnClick(e, count = 10000) {
        let todoItemList = this.state.todoItemList;
        let i = 1;
        while (i <= count) {
            todoItemList.push(this.getNewToDoItem({ title: i }));
            i++;
        }

        this.setState({
            todoItemList
        });
    }

    //存储数据到本地
    onSaveLocalDataClick() {
        // let localData = {
        //     todoItemList: this.state.todoItemList,
        //     doneItemList: this.state.doneItemList
        // };
        // setStorage('todoList', localData);
        setStorage(STORAGE_ID_TODOITEM_LIST, this.state.todoItemList);
        setStorage(STORAGE_ID_DONEITEM_LIST, this.state.doneItemList);
    }

    //清空本地存储数据
    onClearLocalDataClick() {
        clearStorage();
    }

    render() {
        let { style, className, ...others } = this.props;
        return <div className={`main ${className}`} style={style} {...others}>
            <span className='title'>todolist class 版本实现</span>
            <InputComponent
                style={{ 'margin': '10px 0px 10px 0px' }}
                value={this.state.value}
                onChange={this.onTxtChange}
                onKeyDown={this.onTxtKeyDown}
                onClick={this.onClick}
                placeholder={'请输入待办事项  [回车快速添加]'}
            />
            <ItemContainer title={'测试: '} titleStyle={{ 'color': 'red', 'fontSize': '16px' }}
                style={{ 'border': '1px solid red' }}>
                <div>
                    <button className={'test_btn'} onClick={this.onAdd10KBtnClick}>增加10k条数据</button>
                    <button className={'test_btn'} onClick={this.onClearAllBtnClick}>全部清除</button>
                    <button className={'test_btn'} onClick={this.onSaveLocalDataClick}>数据本地存储</button>
                    <button className={'test_btn'} onClick={this.onClearLocalDataClick}>清除本地存储</button>
                </div>
            </ItemContainer>
            <ItemContainer title={'正在进行'} titleStyle={{ 'color': 'green', 'fontSize': '16px' }}
                style={{ 'margin': '10px 0px 10px 0px', 'border': '5px solid green' }}>
                <ul className='itemlist'>
                    {
                        this.state.todoItemList && this.state.todoItemList.map((item, index) => {
                            return <ToDoItem key={item.id} style={{ 'magin': '10px' }} item={item}
                                onCheckChange={this.onToDoItemChange} onDelClick={this.onItemDelClick} />
                        })
                    }
                </ul>
            </ItemContainer>
            <ItemContainer title={'已经完成'} titleStyle={{ 'color': 'gray', 'fontSize': '16px' }}
                style={{ 'border': '1px solid gray' }}>
                <ul className='itemlist'>
                    {
                        this.state.doneItemList && this.state.doneItemList.map((item, index) => {
                            return <ToDoItem key={item.id} style={{ 'magin': '10px' }} item={item}
                                onCheckChange={this.onToDoItemChange} onDelClick={this.onItemDelClick} />
                        })
                    }
                </ul>
            </ItemContainer>
        </div>
    }
}

export default Main;