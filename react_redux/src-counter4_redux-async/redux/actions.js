/*
包含所有的 action creator
+ 同步的 action 都是返回一个对象
+ 异步的 action 返回的是一个函数，函数中可以执行异步代码
 */

import {INCREMENT, DECREMENT} from "./action-types";

export const increment = (number) => ({type: INCREMENT, data: number});
export const decrement = (number) => ({type: DECREMENT, data: number});

export const incrementAsync = (number) => {
    return (dispatch) => {
        // 异步的代码
        setTimeout(() => {
            // 1s 之后才去分发一个增加的 action
            dispatch(increment(number))
        }, 1000);
    }
};
