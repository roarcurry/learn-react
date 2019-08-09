import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import MyNavLink from "../components/myNavLink";
import News from './news';
import Message from './message';

export default class About extends Component{
    render() {
        return (
            <div>
                <h2>Home Route Component</h2>

                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink className="" to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink className="" to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>

            </div>
        );
    }
}