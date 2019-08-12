import React from 'react';
import {connect} from "react-redux";
import {decrement, increment, incrementAsync} from "../redux/actions";
import Counter from "../components/counter";

export default connect(
    state => ({count: state}), {increment, decrement, incrementAsync}
)(Counter);