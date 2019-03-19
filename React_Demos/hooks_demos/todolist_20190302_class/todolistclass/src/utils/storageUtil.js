
//将数据存储到本地localStorage
export function setStorage(contentId, content) {
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    StorageAPI.setItem(contentId + '', content);
    console.log(`set localStorage, key: ${contentId}, value: ${JSON.stringify(content)}`);
}

//从本地localStorage获取数据
//return JSON Format Data
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