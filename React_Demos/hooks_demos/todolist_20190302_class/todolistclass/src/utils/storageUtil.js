
//将数据存储到本地localStorage
export function setStorage(contentId, content) {
    console.log(`todolist-> set localStorage, key: ${contentId}, content: ${JSON.stringify(content)}`);
    StorageAPI.setItem(contentId + '', JSON.stringify(content));
}

//从本地localStorage获取数据
export function getStorage(contentId) {
    return StorageAPI.getItem(contentId + '');
}

export function clearStorage() {
    return StorageAPI.clear();
}

//封装localStorage相关接口
const StorageAPI = {
    setItem(key, value) {
        window.localStorage.setItem(key, value);
    },
    getItem(key) {
        window.localStorage.getItem(key);
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