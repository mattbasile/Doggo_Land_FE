import React, { Component } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import CardDisplay from './CardDisplay'
import Footer from '../../Footer'

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
          displayKennels: false,
          displayDogs: true
        }
      }
    showKennels=(e)=>{
        // e.preventDefault();
        this.setState({
            displayKennels: true,
            displayDogs: false
        })
    }
    showDogs=(e)=>{
        // e.preventDefault();
        this.setState({
            displayDogs: true,
            displayKennels: false
        })
    }
    render() {
        return (
            <section className={this.props.hidden? null : "opacity-25"}>
                <NavBar {...this.props} showDogs={this.showDogs} showKennels={this.showKennels}/>
                <Hero/>
                <CardDisplay {...this.props} showDogs={this.showDogs} showKennels={this.showKennels} displayDogs={this.state.displayDogs} displayKennels={this.state.displayKennels}/>
                <Footer/>
            </section>
        )
    }
}
