import React, { Component } from 'react'
import { connect } from "react-redux";
import  HomePage from '../../components/Visitor/HomePage/HomePage'
import actions from '../../store/actions/index'

class LandingPageView extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getDogs()
    }
    render() {
        return (
            <>
                <HomePage {...this.props}/>
            </>
        )
    }
}
const mapStateToProps = (state)=>(
    {
        dogs: state.dogs
    }
)
const mapDispatchToProps = dispatch => {
    return {
      getDogs: () => dispatch(actions.visitors.getDogs())
    };
  };


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPageView)
