import React, {Component} from 'react';
import './App.css';
import {useState} from 'react';

class AppWithHooks extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    setCount(){
        this.setState({
            count: ++this.state.count
        },()=>{
            console.log(`count: +1`);
        });
    }

    render(){
        return <div>
            <button onClick={this.setCount.bind(this)}>{'点击+1'}</button>
            <span>{this.state.count}</span>
        </div>
    }
}

export default AppWithHooks;
