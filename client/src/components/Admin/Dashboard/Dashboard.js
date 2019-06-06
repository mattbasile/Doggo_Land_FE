import React, { Component } from 'react'
import Navbar from './NavBar.js'
import Header from './Header.js'
import MessageSection from './MessagesSection'
import DogsChart from './DogsChart'
import Footer from '../../Footer'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <section>
                <Navbar user={this.props.user} {...this.props}/>
                <Header user={this.props.user}/>
                <MessageSection user={this.props.user}/>
                <DogsChart user={this.props.user}/>
                <Footer/>
            </section>
        )
    }
}
