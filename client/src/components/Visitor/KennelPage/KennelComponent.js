
import NavBar from '../HomePage/NavBar'
import Header from './Header';
import DogsSection from './DogsSection'

import React, { Component } from 'react'

export default class KennelComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
            <NavBar {...this.props}/>
            <Header  {...this.props}/>
            <DogsSection  {...this.props}/>
        </section>
        )
    }
}

