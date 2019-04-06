//性能测试工具类

export function performance_start(key) {
    performance_timer.start(key);
}

export function performance_stop(key) {
    performance_timer.stop(key);
}

export function performance_getTime(key) {
    return performance_timer.getTime(key);
}

//性能参数获取封装
let performance_timer = {
    data: {},
    start: (key) => {
        performance_timer.data[key] = new Date();
    },
    stop: (key) => {
        let start = performance_timer.data[key];
        if (start) {
            performance_timer.data[key] = new Date() - start;
        }
    },
    getTime: (key) => {
        return performance_timer.data[key];
    }
}