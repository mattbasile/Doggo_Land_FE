import React, { Component } from 'react'
import KennelComponent from '../../components/Visitor/KennelPage/KennelPage'


export default class KennelPage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                <KennelComponent {...this.props}/>
            </>
        )
    }
}
