/*
包含了所有的 action creator（action 的工厂函数）
+ 同步
+ 异步
 */
import {ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENTS} from "./action-types";

// 同步
export const addComment = (comment) => ({type:ADDCOMMENT, data: comment});
export const deleteComment = (index) => ({type:DELETECOMMENT, data: index});
export const receiveComments = (comments) => ({type:RECEIVECOMMENTS, data: comments});

// 异步
// 从后台获取数据
export const getComments = () => {
    return (dispatch) => {
        // 模拟发送 ajax 请求异步获取数据
        setTimeout(() => {
            const initComments = [
                {username:'Tom', content:'React 挺好的！'},
                {username:'Jack', content:'React 太难了！'}
            ];
            dispatch(receiveComments(initComments))
        }, 1000)
    };
};




