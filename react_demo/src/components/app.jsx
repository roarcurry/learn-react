import React, {Component} from 'react';

import Search from './search';
import Main from './main';

export default class App extends Component{
    state = {
        searchName: ''
    };
    setSearchName = (searchName) => {
        this.setState({searchName});
    };
    render() {
        const {searchName} = this.state;
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={searchName}/>
            </div>
        );
    }
}