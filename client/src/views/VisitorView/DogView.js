import React, { Component } from 'react'
import DogPage from '../../components/Visitor/DogPage/DogPage'
export default class DogView extends Component {
    constructor(props){
        super(props);
        this.state={
            dog_id: props.match.params.id,
            selected_dog: [],
            selected_kennel: []
        }
    }
    establish_dog(){
        if(this.props.kennels.length < 1){
            let active_dog = JSON.parse(localStorage.getItem("active_dog"));
            let active_kennel = JSON.parse(localStorage.getItem("active_kennel"));
            return {dog:active_dog, kennel:active_kennel}
        } else{
            const id = Number(this.props.match.params.id);
            let active_dog = this.props.dogs.find(dog=>dog.id===id)
            let active_kennel = this.props.kennels.find(kennel=>kennel.id===active_dog.kennel_id)
            console.log(active_dog, this.props.kennels)
            localStorage.setItem("active_dog", JSON.stringify(active_dog))
            localStorage.setItem("active_kennel", JSON.stringify(active_kennel))
            return {dog:active_dog, kennel:active_kennel}
        }
    }
    componentDidMount(){
        this.establish_dog()
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <section>

                <DogPage {...this.props} dogs={this.props.dogs} requestDog= {this.props.requestDog} dog={this.establish_dog().dog} kennel={this.establish_dog().kennel} />
        
            </section>
        )
    }
}

