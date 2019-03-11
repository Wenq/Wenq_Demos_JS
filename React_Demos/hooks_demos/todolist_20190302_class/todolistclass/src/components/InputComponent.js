//输入组件
import React,{Component} from 'react';
import './InputComponent.css';

 class InputComponent extends Component{
     render(){
         return (<div className='inputcomponent'>
             <input type='text'/>
             <button>新增</button>
         </div>
         )
     }
 }

 export default InputComponent;