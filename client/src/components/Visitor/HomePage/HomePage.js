import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import CardDisplay from './CardDisplay'


export default function HomePage(props) {
    return (
        <>
            <NavBar {...props}/>
            <Hero/>
            <CardDisplay {...props}/>

        </>
    )
}
