//首页
import React, {Component} from 'react';
import * as styles from './Main.css';

export default class Main extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className={styles['main']}>
            <span>{'main component'}</span>
            {
                this.props.children
            }
        </div>
    }
}