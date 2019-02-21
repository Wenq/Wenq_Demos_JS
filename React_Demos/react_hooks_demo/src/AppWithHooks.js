import React, {Component} from 'react';
// import './App.css';
// class AppWithHooks extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }

//     setCount(){
//         this.setState({
//             count: ++this.state.count
//         },()=>{
//             console.log(`count: +1`);
//         });
//     }

//     render(){
//         return <div>
//             <span>u click {this.state.count} times</span>
//             <button onClick={this.setCount.bind(this)}>Click me</button>
//         </div>
//     }
// }

// export default AppWithHooks;

//使用hooks重构
import {useState} from 'react';
import {useEffect} from 'react';
function AppWithHooks() {
    //声明一个名为“count”的新状态变量
    const [count, setState] = useState(10); //参数'10'是状态变量count的初始值
    //参数可以是复杂对象
    const [aa, testFun] = useState({a:'xxx'});

    //在刷新DOM之后运行你的副作用函数
    useEffect(()=>{
        document.title = `u click ${count} times`;

        //副作用函数可以通过返回一个函数来指定如何“回收”它们
        return ()=>{
            console.log('执行回收操作');
        }
    });
    //可以用是有多个useEffect
    useEffect(()=>{
        //todo
    });

    return (
        <div>
            <p>u click {count} times</p>
            <button onClick={()=>setState(++count)}>
                Click me
            </button>
            </div>
    );
}

export default AppWithHooks;