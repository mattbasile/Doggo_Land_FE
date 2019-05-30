import React, { Component } from 'react'
import KennelComponent from '../../components/Visitor/KennelPage/KennelComponent'
import { connect } from "react-redux";
import actions from '../../store/actions/index'
import { getKennelById } from '../../store/actions/vistorActions';
class KennelView extends Component {
    constructor(props){
        super(props)
        this.state={
            kennel_id: this.props.match.params.id,
            isLoading: true
        }
    }

    getKennelFromURL = () =>{
        const kennel_id = Number(this.props.match.params.id)
        console.log(kennel_id)
        this.props.getKennelById(kennel_id)
    }
    componentDidMount(){
        this.getKennelFromURL();
        this.setState({isLoading: false})
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <>
            {this.state.isLoading? (<h2>Loading...</h2>)
            :(
                <KennelComponent {...this.props} />
            )
            } 
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