import React from 'react'
import NavBar from '../HomePage/NavBar'
import Header from './Header';
import DogsSection from './DogsSection'

export default function KennelPage(props) {
    return (
        <section>
            <NavBar {...props}/>
            <Header/>
            <DogsSection/>
        </section>
    )
}