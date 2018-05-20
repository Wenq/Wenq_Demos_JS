import React,{Component} from 'react';

export default class Home extends Component{

	constructor(props){
		super(props);

		this.state = {
			count: 0
		}
	}

	_handleClick(e){
		console.log(this.state.count);
		this.setState({
			count: ++this.state.count
		});
	}
	render(){
		return <div>
		this is Home....!<br/>
		当前计数为: {this.state.count}<br/>
		<button onClick={e=>this._handleClick(e)}>自增</button>
		</div>
	}
}