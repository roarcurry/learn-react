import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component{
    state = {
        searchName: ''
    };
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    };
    searchNameChange = (event) => {
        const searchName = event.target.value;
        this.setState({searchName});
    };
    search = () => {
        const {searchName} = this.state;
        const {setSearchName} = this.props;
        if(searchName){
            setSearchName(searchName);
        }
    };
    render() {
        const {searchName} = this.state;
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" value={searchName} onChange={this.searchNameChange}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}