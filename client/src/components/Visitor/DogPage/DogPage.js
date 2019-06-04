import React from 'react'
import NavBar from '../HomePage/NavBar'
import Header from './Header';
import Footer from '../../Footer'

export default function DogPage(props) {
    
        
    // console.log(id, active_dog)
    return (
        <div>
           <NavBar {...props}/>
           <Header dog={props.dog} kennel={props.kennel}/>
           <Footer/>
        </div>
    )
}
