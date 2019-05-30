import React, { Component } from 'react'
import DogPage from '../../components/Visitor/DogPage/DogPage'
export default class DogView extends Component {
    constructor(props){
        super(props);
        this.state={
            dog_id: props.match.params.id,
            selected_dog: [],
            isLoading: true
        }
    }
    
    establish_dog(){
        let dog = this.props.dogs.find(dog=>dog.id===Number(this.state.dog_id))
        console.log(dog)
        this.setState({selected_dog: dog})
    }
    componentDidMount(){
        console.log(this.props.dogs, this.props.match.params.id)

        this.establish_dog();
        this.setState({isLoading: false})
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section>
                 {this.state.isLoading? (<h2>Loading...</h2>)
            :(
                <DogPage {...this.props}/>
            )
            } 
                
            </section>
        )
    }
}

