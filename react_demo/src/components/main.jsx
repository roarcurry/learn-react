import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

export default class Main extends Component{
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    };
    static propTypes = {
        searchName: PropTypes.string.isRequired
    };
    // 当组件接收到新的属性时回调
    componentWillReceiveProps(nextProps, nextContext) {
        const {searchName} = nextProps; // 指定了新的 searchName，需要发送请求

        // 更新 loading 状态
        this.setState({initView: false, loading:true});

        const url = `https://api.github.com/search/users?q=${searchName}`;
        Axios.get(url).then(response => {
            // 得到数据
            const users = response.data.items.map((item, index) => ({name: item.login, url: item.html_url, avatarUrl:item.avatar_url}));
            // 更新 users 状态
            this.setState({loading: false, users});
        }).catch(error => {
            // 得到数据
            const errorMsg = error;
            // 更新 errorMsg 状态
            this.setState({loading: false, errorMsg});
        });
    }
    render() {
        const {initView, loading, users, errorMsg} = this.state;
        if(initView){
            return (
                <h2>请输入关键字进行搜索</h2>
            );
        }else if(loading){
            return (
                <h2>LOADING...</h2>
            );
        }else if(users){
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }

                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                </div>
            );
        }else if(errorMsg){
            return (
                <h2>{errorMsg}</h2>
            );
        }
    }
}