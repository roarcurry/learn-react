import {createStore} from "redux";
import {counter} from './reducers';

// 生成一个 store 对象
const store = createStore(counter); // 内部会第一次调用 reducer 函数得到初始 state
export default store;