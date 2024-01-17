//搜索框组件
import React, {Component} from 'react';
import * as styles from './searchBar.css';

export default class searchBar extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div className={styles['searchbar']}>
            <span>{'searchBar component'}</span>
            {
                this.props.children
            }
        </div>
    }
}