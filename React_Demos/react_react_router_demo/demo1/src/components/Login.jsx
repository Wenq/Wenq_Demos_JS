//登录
import React, {Component} from 'react';
import * as styles from './Login.css';

export default class Login extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className={styles['login']}>
            <span>{'main component'}</span>
            {
                this.props.children
            }
        </div>
    }
}