import React from 'react'
import './Dashboard.css'


export default function MessageCard(props) {
    return (
        <div className="w-1/4 bg-blue-200 message-card ">
            <div className="flex justify-between items-center px-6 py-4">
                <p className="font-semibold text-3xl body-font">Tom Dexter</p>
                {props.old ? (<p className="old-badge">20 days</p>):(<p className="new-badge">New</p>)}
            </div>
            <p className="body-font font-medium body-font px-6 pb-8">Tom is interested in adopting Baxter. Contact them here.</p>
            <button className="flex justify-center items-center w-full bg-gray-300 py-2 text-3xl font-semibold">
                View Full Message
            </button>
        </div>
    )
}
