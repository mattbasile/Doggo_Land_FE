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
        return (
            <section>
                <Navbar {...this.props}/>
                <Header/>
                <MessageSection/>
                <DogsChart/>
                <Footer/>
            </section>
        )
    }
}
