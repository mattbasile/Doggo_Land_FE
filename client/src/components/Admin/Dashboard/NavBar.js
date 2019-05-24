import React from 'react'

export default function NavBar(props) {
    return (
        <div className="flex justify-around h-24 items-center body-font bg-white blue-font mt-4">
        <p onClick={() => {props.history.push('/')}} className="cursor-pointer text-5xl font-normal title-font tracking-wide">Doggo Land</p>

        <nav className="flex justify-between w-1/3 text-2xl font-medium">
            <a href="">Dashboard</a>
            <div className="flex items-center">
                <a href="">Messages</a>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-300 body-font font-semibold text-red-800 mx-2 ">3</div>
            </div>
            <a href="">Dogs</a>
        </nav>
        <button onClick={() => {props.history.push('/profile')}} className="w-16 h-16 rounded-full flex items-center justify-center bg-red-300 body-font text-red-800 mx-2">
        </button>
    </div>
    )
}
