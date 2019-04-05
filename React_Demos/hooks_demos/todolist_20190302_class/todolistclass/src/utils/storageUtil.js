import { List, fromJS, Map } from 'immutable';
import { CONS_TODO_ITEM_LIST, CONS_DONE_ITEM_LIST } from '../env/constants';

//加载初始数据源
export function loadInitData(){
    let InitStateObj = new Map(); //初始化数据对象
    let todoItemList_data = getStorage(CONS_TODO_ITEM_LIST);
    let doneItemList_data = getStorage(CONS_DONE_ITEM_LIST);
    InitStateObj = InitStateObj.set(CONS_TODO_ITEM_LIST, fromJS(todoItemList_data) || new List());
    InitStateObj = InitStateObj.set(CONS_DONE_ITEM_LIST, fromJS(doneItemList_data) || new List());
    return InitStateObj;
}

//将数据存储到本地localStorage
export function setStorage(contentId, content) {
    if (typeof content !== 'string') {
        content = JSON.stringify(content); //immutable对象可以直接转为string
    }
    StorageAPI.setItem(contentId + '', content);
    console.log(`set localStorage, key: ${contentId}, value: ${JSON.stringify(content)}`);
}

//从本地localStorage获取数据
//return: JSON Format Data
export function getStorage(contentId) {
    let content = StorageAPI.getItem(contentId + '') || '';
    try {
        content = JSON.parse(content);
    } catch (e) {
        console.log(`convert string 2 JSON fail, key: ${contentId}, reason: ${e}`);
    }
    return content;
}

export function clearStorage() {
    StorageAPI.clear();
    console.log(`clearStorage: done`);
}

//封装localStorage相关接口
const StorageAPI = {
    setItem(key, value) {
        window.localStorage.setItem(key, value);
    },
    getItem(key) {
        return window.localStorage.getItem(key);
    },
    removeItem(key) {
        window.localStorage.removeItem(key);
    },
    clear() {
        window.localStorage.clear();
    },
    key(index) {
        return window.localStorage.key(index);
    },
    length() {
        return window.localStorage.length;
    }
}