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
    constructor(props){
        super(props)

        this.state = {
            value: '',
            todoItemList: [1,2,3],
            doneItemList: [4,5,6]
        }

        this.onTxtChange = this.onTxtChange.bind(this);
        this.onTxtKeyDown = this.onTxtKeyDown.bind(this);
    }

    onTxtChange(value){
        this.setState({value});
    }

    onTxtKeyDown(e){
        if(e.keyCode===13){//enter
            alert(e.target.value);
        }
    }

    render() {
        // let todoItemList = [1,2,3];
        // let doneItemList = [4,5,6];

        let {style, className, ...others} = this.props;
        return <div className={'main' + ' ' + className} style={style} {...others}>
            <span className='title'>todolist class 版本实现</span>
            <InputComponent value={this.state.value} onChange={this.onTxtChange} onKeyDown={this.onTxtKeyDown}/>
            <ItemContainer title={'待处理'} items={[]}>
                {
                    this.state.todoItemList && this.state.todoItemList.map((item, index) => {
                        return <ToDoItem key={index} />
                    })
                }
            </ItemContainer>
            <ItemContainer title={'已完成'} items={[]}>
                {
                    this.state.doneItemList && this.state.doneItemList.map((item, index) => {
                        return <DoneItem key={index} />
                    })
                }
            </ItemContainer>
        </div>
    }
}

export default Main;