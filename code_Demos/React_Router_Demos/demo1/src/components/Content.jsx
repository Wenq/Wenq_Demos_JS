//内容列表(各个主题帖子)
import React, {Component} from 'react';
import * as styles from './Content.css';

export default class Content extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className={styles['content']}>
            <span>{'Content component'}</span>
            {
                this.props.children
            }
        </div>
    }
}