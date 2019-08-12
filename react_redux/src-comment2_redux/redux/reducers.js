/*
包含了多个 reducer 函数，用来根据老的 state 和 action 返回新的 state
 */
import {combineReducers} from "redux";
import {ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENTS, DECREMENT, INCREMENT} from "./action-types";

const initComments = [
    // {username:'Tom', content:'React 挺好的！'},
    // {username:'Jack', content:'React 太难了！'}
];

function comments(state = {
    comments: initComments
}, action) {
    const {comments} = state;
    switch (action.type) {
        case ADDCOMMENT:
            return {comments: [action.data, ...comments]};
        case DELETECOMMENT:
            return {comments: comments.filter((comment, index) => index !== action.data)};
        case RECEIVECOMMENTS:
            return {comments: action.data};
        default:
            return state;
    }
}

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}

export default combineReducers({
    counter, comments
})

// Redux 向外暴露的结构
// {counter: 2, comments: []}