
import Baxter from '../../../imgs/baxter.jpg'
import AddDogForm from './AddDogForm'

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
    // const kennel = this.props.kennels.find(kennel => kennel.id === this.props.dog.kennel_id);
    // this.setState({kennel})
}
componentWillMount(){
    document.addEventListener('mousedown',this.handleClick, false)
    this.props.getBreeds()
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
            <section ref={node =>this.node = node} className=" mx-auto w-4/5 add-modal z-10 justify-center items-center text-center shadow-xl my-4 bg-white">
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
                <AddDogForm 
                dog={this.props.dog}
                addDog={this.props.addDog}
                getBreeds={this.props.getBreeds}
                kennel_id={this.props.user.kennel_id}
                breeds={this.props.breeds}
                addBreed={this.props.addBreed}
                newBreed={this.props.newBreed}
                loading={this.props.loading}
                success={this.props.success}
                />
                </>
                )
            
            }
            </section>
        </div>
        )
    }
}



