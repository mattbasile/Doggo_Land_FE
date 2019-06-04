
import Baxter from '../../imgs/baxter.jpg'
import DogRequestForm from './DogRequestForm'

import React, { Component } from 'react'

const leftStyles={
    width: "298px",
    height: "434px",
    backgroundImage: `url(${Baxter})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", 
    backgroundSize: "cover",
    borderRadius: "25px 0px 0px 25px",
    zIndex: "10",
}
export default class DogCardModal extends Component {
constructor(props){
    super(props);
   this.state={
       kennel: [],
   }
    
}
componentDidMount(){
    const kennel = this.props.kennels.find(kennel => kennel.id === this.props.dog.kennel_id);
    this.setState({kennel})
}
componentWillMount(){
    document.addEventListener('mousedown',this.handleClick, false)
  }
  componentWillUnmount(){
   document.removeEventListener('mousedown', this.handleClick, false)
 }
 handleClick=(e)=>{
   if(this.node.contains(e.target)){
     console.log("continue ur work")
   
   }
   else{
     this.props.closeModal(e)
   }
   // CloseModal
//    this.handleClickOutside()

 
 }

    render() {
        return (
        <div className="modal-overlay">
            <section ref={node =>this.node = node} className="flex mx-auto w-4/5 modal z-10 flex justify-center items-center text-center shadow-xl my-4 bg-white">
                {this.props.submitted ? (
                <div>
                    <h2 className="submitted-header">Thank you for your interest in {this.props.dog.name}!</h2>
                    <p>Keep an eye on your inbox for a message from {this.state.kennel.name}</p>
                    <button onClick={(e)=>this.props.closeModal(e)} className="close-btn hover:bg-red-800">Close</button>
                </div>
                )
                :
                (
                <>
                <div style={leftStyles}></div>
                <DogRequestForm dog={this.props.dog} submitRequest={this.props.submitRequest}/>
                </>
                )
            
            }
                
            </section>
        </div>
        )
    }
}



