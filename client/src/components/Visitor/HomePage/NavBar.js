import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    const moveToKennels = (e) =>{
        props.showKennels(e)
        return true
    }
    const moveToDogs = (e) =>{
        props.showDogs(e)
        return true
    }
    return (
        <div className="flex justify-around h-24 items-center body-font blue-background text-white">
            <p onClick={() => {props.history.push('/')}} className="cursor-pointer text-5xl font-normal title-font tracking-wide">Doggo Land</p>

            <nav className="flex justify-between w-1/3 text-2xl font-medium">
                <a className="cursor-pointer hover:underline" href="/#cards" onClick={(e)=> {return moveToDogs(e)}} >Dogs</a >
                <a className="cursor-pointer hover:underline" href="/#cards" onClick={(e)=> {return moveToKennels(e)}} >Kennels</a>
                <a className="cursor-pointer hover:underline" onClick={() => {props.history.push('/about')}} >About</a>
                <a className="cursor-pointer hover:underline" onClick={() => {props.history.push('/contact')}} >Contact</a> 
            </nav>
            <button onClick={() => {props.history.push(localStorage.getItem("authToken")?'/admin/dashboard':'./login')}} className=" text-2xl green-background hover:bg-green-700 text-white font-bold py-2 px-4 rounded font-light">
                Admin
            </button>
        </div>
    )
}
