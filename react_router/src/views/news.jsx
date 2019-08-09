import React, {Component} from 'react';

export default class News extends Component{
    state = {
        newsList: ['news001', 'news002', 'news003']
    };
    render() {
        const {newsList} = this.state;
        return (
            <ul>
                {
                    newsList.map((news, index) => <li key={index}>{news}</li>)
                }
            </ul>
        );
    }
}