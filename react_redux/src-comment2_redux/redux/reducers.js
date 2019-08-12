/*
包含了多个 reducer 函数，用来根据老的 state 和 action 返回新的 state
 */

import {ADDCOMMENT, DELETECOMMENT, RECEIVECOMMENTS} from "./action-types";

const initComments = [
    // {username:'Tom', content:'React 挺好的！'},
    // {username:'Jack', content:'React 太难了！'}
];

export function comments(state = {
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

