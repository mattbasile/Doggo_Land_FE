import React, { Component } from 'react'
import  HomePage from '../../components/Visitor/HomePage/HomePage'


export default class landingPageView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <HomePage {...this.props}/>
            </>
        )
    }
}
