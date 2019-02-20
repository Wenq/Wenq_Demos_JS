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
function AppWithHooks() {
    const [count, setState] = useState(0);
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