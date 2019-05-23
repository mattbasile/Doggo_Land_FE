import React from 'react'

export default function NavBar() {
    return (
        <div className="flex justify-around h-24 items-center body-font blue-background text-white">
            <a href="" className="text-5xl font-normal title-font tracking-wide">Doggo Land</a>
            <nav className="flex justify-between w-1/3 text-2xl font-medium">
                <a href="">Dogs</a>
                <a href="">Kennels</a>
                <a href="">About</a>
                <a href="">Contact</a> 
            </nav>
        </div>
    )
}
