import React from 'react'
import './Dashboard.css'

export default function Header(props) {
    return (
        <section className="flex blue-background h-56 justify-center items-center text-center">
            <div className="p-4">
                <h2 className="text-2xl body-font font-black text-second-blue">New Messages</h2>
                <p className="text-6xl body-font font-semibold number-gray">{props.messages.length}</p>
                <button className="view-more-sm text-white bg-blue-900 hover:bg-blue-800">
                    <p className="font-medium w-3/4 text-xl pl-3">View All</p>
                    <i className="text-2xl w-1/4 far fa-arrow-alt-circle-right justify-s-end"></i>
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-2xl body-font font-black text-second-blue">Current Dogs</h2>
                <p className="text-6xl body-font font-semibold number-gray">
                    {props.user.dogs.length}
                </p> {props.user.dogs.length <1 ? 
                <button className="text-white view-more-sm bg-green-900 hover:bg-green-800">
                    <p className="font-medium w-3/4 text-lg pl-1 ">Add a Dog</p>
                    <i className="text-2xl w-1/4 far fa-arrow-alt-circle-right justify-s-end"></i>
                </button>
                :   
                <button className="text-white view-more-sm bg-blue-900 hover:bg-blue-800">
                    <p className="font-medium w-3/4 text-xl pl-3 ">View All</p>
                    <i className="text-2xl w-1/4 far fa-arrow-alt-circle-right justify-s-end"></i>
                </button>
                }
            </div>
        </section>
    )
}
