import React from 'react'
import NavBar from '../HomePage/NavBar'
import Header from './Header';

export default function DogPage(props) {
    return (
        <div>
           <NavBar {...props}/>
           <Header />

        </div>
    )
}
