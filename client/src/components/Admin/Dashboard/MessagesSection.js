import React from 'react'
import MessageCard from './MessageCard.js'


export default function MessagesSection(props) {
    return (
        <section className="flex flex-col p-8">
            <h2 className="text-3xl body-font font-normal">Current Messages</h2>
            <div className="card-container">
                {props.messages.length <1 ? 
                <h3>You have no new messages at this time.</h3>
                :
                (props.messages.map(message=>{
                    return <MessageCard key={message.id} message={message}/>
                }))}
                {/* <MessageCard old={false}/>
                <MessageCard old={true}/>
                <MessageCard old={true}/> */}
            </div>
            <div className="blue-background hover:bg-blue-800 w-1/5 mx-auto py-4 px-2 rounded-full text-white flex items-center">
                <button className="w-5/6 text-2xl font-semibold body-font">View All Messages</button>
                <i className="text-4xl  w-1/6 far fa-arrow-alt-circle-right justify-s-end"></i>
            </div>
            
        </section>
    )
}
