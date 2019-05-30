
import NavBar from '../HomePage/NavBar'
import Header from './Header';
import DogsSection from './DogsSection'

import React, { Component } from 'react'

export default class KennelComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            kennel_id: props.match.params.id,
        }
    }
    render() {
        return (
            <section>
            <NavBar {...this.props}/>
            <Header kennel_id={this.state.kennel_id} {...this.props}/>
            <DogsSection kennel_id={this.state.kennel_id} {...this.props}/>
        </section>
        )
    }
}

