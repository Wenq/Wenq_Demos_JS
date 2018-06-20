//拦截ajax请求，模拟返回服务端数据
import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock('/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});