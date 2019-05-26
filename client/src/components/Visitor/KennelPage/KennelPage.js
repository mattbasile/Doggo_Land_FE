import React from 'react'
import NavBar from '../HomePage/NavBar'
import Header from './Header';


export default function KennelPage(props) {
    return (
        <section>
            <NavBar {...props}/>
            <Header/>
        </section>
    )
}
