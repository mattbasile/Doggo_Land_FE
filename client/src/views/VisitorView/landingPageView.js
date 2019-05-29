import React, { Component } from 'react'
import  HomePage from '../../components/Visitor/HomePage/HomePage'


class LandingPageView extends Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }


    render() {
        return (
            <>
                <HomePage 
                {...this.props}/>
            </>
        )
    }
}
// 


export default LandingPageView
