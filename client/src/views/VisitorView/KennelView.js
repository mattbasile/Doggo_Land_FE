import React, { Component } from 'react'
import KennelComponent from '../../components/Visitor/KennelPage/KennelComponent'
import { connect } from "react-redux";
import actions from '../../store/actions/index'
import { getKennelById } from '../../store/actions/vistorActions';
class KennelView extends Component {
    constructor(props){
        super(props)
        this.state={
            selected_kennel:[],
        }
    }

    establish_kennel(){
        if(this.props.kennels.length < 1){
            let active_kennel = JSON.parse(localStorage.getItem("active_kennel"));
            return active_kennel
        } else{
            const id = Number(this.props.match.params.id);
            let active_kennel = this.props.kennels.find(kennel=>kennel.id=== id)
            localStorage.setItem("active_kennel", JSON.stringify(active_kennel))
            return active_kennel
        }
    }
    componentDidMount(){
        this.establish_kennel()
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <>
                <KennelComponent {...this.props} kennel={this.establish_kennel()}/>
            </>
        )
    }
}

const mapStateToProps = (state)=>(
    {
        selected_kennel: state.selected_kennel
    }
  )
  const mapDispatchToProps = dispatch => {
    return {
      getKennelById: id => dispatch(actions.visitors.getKennelById(id))
    };
  };
  
  
  export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )(KennelView)