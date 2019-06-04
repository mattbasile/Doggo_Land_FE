import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import CardDisplay from './CardDisplay'
import Footer from '../../Footer'


export default function HomePage(props) {
    return (
        <section className={props.hidden? null : "opacity-25"}>
            <NavBar {...props}/>
            <Hero/>
            <CardDisplay {...props}/>
            <Footer/>
        </section>
    )
}
