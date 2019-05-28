import React, { Component } from 'react'
import DogPage from '../../components/Visitor/DogPage/DogPage'
export default class DogView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <section>
                <DogPage {...this.props}/>
            </section>
        )
    }
}

