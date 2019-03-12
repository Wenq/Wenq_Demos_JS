//输入组件
import React,{Component} from 'react';
import './InputComponent.css';

 class InputComponent extends Component{

    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(e){
        this.props.onChange&&this.props.onChange(e.target.value);
    }

    onKeyDown(e){
        e.stoppropagation();
        this.props.onKeyDown&&this.props.onKeyDown(e);
    }

     render(){
         return (<div className='inputcomponent'>
             <input type='text' className='text' onChange={this.onChange} onKeyDown={this.onKeyDown}/>
             <button className='btn'>新增</button>
         </div>
         )
     }
 }

 export default InputComponent;