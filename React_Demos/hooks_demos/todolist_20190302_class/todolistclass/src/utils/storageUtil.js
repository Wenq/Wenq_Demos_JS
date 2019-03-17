
//将数据存储到本地localStorage
export function setStorage(contentId, content) {
    console.log(`todolist-> set localStorage, key: ${contentId}, content: ${JSON.stringify(content)}`);
}

//从本地localStorage获取数据
export function getStorage(contentId) {
    return {};
}