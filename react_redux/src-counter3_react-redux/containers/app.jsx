import React from 'react';
import {connect} from "react-redux";
import {decrement, increment} from "../redux/actions";
import Counter from "../components/counter";

export default connect(
    state => ({count: state}), {increment, decrement}
)(Counter);