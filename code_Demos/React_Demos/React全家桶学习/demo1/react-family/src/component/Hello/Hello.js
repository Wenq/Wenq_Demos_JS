/*
 * 独立Hello组件
 */
import React,{Component} from 'react';

export default class Hello extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return <div>'hello Component!'</div>
	}
}