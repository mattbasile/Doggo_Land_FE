import React, { Component } from 'react'
import DogCard from '../DogCard'
import KennelCard from '../KennelCard'

export default class CardDisplay extends Component {
  constructor(props){
    super(props)
    this.state={
      displayKennels: false,
      displayDogs: true
    }
  }
  showKennels(){
    this.setState({
        displayKennels: true,
        displayDogs: false
    })
}
showDogs(e){
    this.setState({
        displayDogs: true,
        displayKennels: false
    })
}
  render() {
    return (
      <>
      <div className="blue-background w-full">
          <div className="flex justify-between w-1/3 mx-auto h-24 items-center body-font  text-white">
              <h3 onClick={()=>{this.showDogs()}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Dogs</h3>
              <h3 onClick={()=>{this.showKennels()}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Kennels</h3>
          </div>
      </div>
      <section className="mt-16">

        <div className="flex flex-wrap justify-around mx-auto">
          {this.state.displayKennels ?
           (this.props.kennels.map(kennel=>{
            return <KennelCard kennel={kennel} key={kennel.id}/>
          }))
           :(
            this.props.dogs.map(dog=>{
              return <DogCard requestDog={this.props.requestDog} dog={dog} key={dog.id}/>
            })
          )}
        </div>
          
      </section>
      </>
    )
  }
}
