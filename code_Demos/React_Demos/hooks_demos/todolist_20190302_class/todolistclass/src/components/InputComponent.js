//输入组件
import React, { Component } from 'react';
import './InputComponent.css';

class InputComponent extends Component {

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.props.onChange && this.props.onChange(e.target.value);
    }

    onKeyDown(e) {
        // e.stoppropagation();
        this.props.onKeyDown && this.props.onKeyDown(e);
    }

    onClick(e){
        this.props.onClick && this.props.onClick(e);
    }

    render() {
        let { style, className, value, onChange, onKeyDown, placeholder, ...others } = this.props;
        let inputStyle = {
            //  "spellCheck": false
        };
        return (<div style={style} className={'inputcomponent' + ' ' + className} {...others}>
            <input
                type='text'
                spellCheck={false}
                placeholder={placeholder || '请输入'}
                style={inputStyle}
                className='text'
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                value={value}
            />
            <button className='btn' onClick={this.onClick}>新增</button>
        </div>
        )
    }
}

export default InputComponent;