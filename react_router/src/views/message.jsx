import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import MessageDetail from './message-detail';

export default class Messages extends Component{
    state = {
        messageList: [
            // {id: 1, title:'message001'},
            // {id: 2, title:'message002'},
            // {id: 3, title:'message003'},
            // {id: 4, title:'message004'}
        ]
    };
    showDetail = (id) => {
        this.props.history.push(`/home/message/messageDetail/${id}`)
    };
    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/messageDetail/${id}`)
    };
    back = () => {
        this.props.history.goBack();
    };
    forward = () => {
        this.props.history.goForward();
    };
    reqPage = () => {
        // 通过 JS 进行页面跳转
        window.location = "http://baidu.com";
    };
    componentDidMount() {
        // 模拟发送 ajax 请求异步获取数据
        setTimeout(() => {
            const messageList = [
                {id: 1, title:'message001', content:'11111'},
                {id: 2, title:'message002', content:'22222'},
                {id: 3, title:'message003', content:'33333'},
                {id: 4, title:'message004', content:'44444'}
            ];
            //更新状态
            this.setState({messageList});
        }, 1000);
    }
    render() {
        const {messageList} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageList.map((message, index) => (
                            <li key={index}>
                                <Link to={`/home/message/messageDetail/${message.id}`}>{message.title}</Link>
                                &nbsp;&nbsp;
                                <button onClick={() => {this.showDetail(message.id)}}>push() 查看</button>
                                <button onClick={() => {this.showDetail2(message.id)}}>replace() 查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>
                <Route path="/home/message/messageDetail/:id" component={MessageDetail}/>
            </div>
        );
    }
}