import React, {Component} from 'react';

// 模拟后台的数据
const messageList = [
    {id: 1, title:'message001', content:'11111'},
    {id: 2, title:'message002', content:'22222'},
    {id: 3, title:'message003', content:'33333'},
    {id: 4, title:'message004', content:'44444'}
];

export default class MessageDetail extends Component{
    render() {
        // 得到请求参数中的 id
        const {id} = this.props.match.params;

        // 查询得到对应的 message
        const message = messageList.find((m) => {
            return m.id === +id;
        }); // 返回第一个结果为 true 的数组元素

        return (
            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
        );
    }
}