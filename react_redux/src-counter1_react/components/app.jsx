import React, {Component} from 'react';

export default class App extends Component {
    state = {
        count: 0
    };
    increment = () => {
        // 1. 得到选择的增加数量
        const number = +this.select.value;
        // 2. 得到原本的 count 状态，并计算新的值
        const count = this.state.count + number;
        // 3. 更新状态
        this.setState({count});
    };
    decrement = () => {
        // 1. 得到选择的增加数量
        const number = +this.select.value;
        // 2. 得到原本的 count 状态，并计算新的值
        const count = this.state.count - number;
        // 3. 更新状态
        this.setState({count});
    };
    incrementIfOdd = () => {
        // 1. 得到选择的增加数量
        const number = +this.select.value;
        // 2. 得到原本的 count 状态
        let count = this.state.count;
        // 3. 满足条件才更新
        if(count %2 === 1){
            count += number;
            this.setState({count});
        }
    };
    incrementAsync = () => {
        // 1. 得到选择的增加数量
        const number = +this.select.value;
        // 2. 得到原本的 count 状态，并计算新的值
        const count = this.state.count + number;
        // 启动延时定时器
        setTimeout(() => {
            // 3. 更新状态
            this.setState({count});
        }, 1000);
    };
    render() {
        const {count} = this.state;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>&nbsp;&nbsp;
                </div>
            </div>
        );
    }
}