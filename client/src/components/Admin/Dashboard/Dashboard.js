import React, { Component } from 'react'
import Navbar from './NavBar.js'
import Header from './Header.js'
import MessageSection from './MessagesSection'
import DogsChart from './DogsChart'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section>
                <Navbar/>
                <Header/>
                <MessageSection/>
                <DogsChart/>
            </section>
        )
    }
}
