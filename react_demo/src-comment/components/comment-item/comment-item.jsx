import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './commentItem.css';

export default class CommentItem extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        deleteComment: PropTypes.func.isRequired
    };

    handleDelete = () => {
        const {comment, index, deleteComment} = this.props;

        // 提示
        if(window.confirm(`确定删除 ${comment.username} 的评论吗？`)){
            deleteComment(index);
        }
    };

    render(){
        const {comment} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        );
    }
}