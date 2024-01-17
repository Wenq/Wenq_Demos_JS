/*页面page1*/
import React,{Component} from 'react';
// import './Page1.css';
import image from './images/brickpsert.jpg';

import style from './Page1.css'; //css modules方式使用css文件


export default class Page1 extends Component{

	render(){
		// return <div className={'page-box'}>
		// this is Page1!
		// <img src={image} className={'pb-image'}/>
		// </div>

		  return (
            <div className={style['page-box']}>
                this is page1~
                <img className={style['pb-image']} src={image}/>
            </div>
        )
	}
}