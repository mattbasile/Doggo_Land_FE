import React from 'react'
import Baxter from '../../imgs/baxter.jpg'
import DogRequestForm from './DogRequestForm'

export default function DogCardModal(props) {
    const leftStyles={
        width: "298px",
        height: "434px",
        backgroundImage: `url(${Baxter})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        borderRadius: "25px 0px 0px 25px",
    }
    const kennel = props.kennels.find(kennel => kennel.id === props.dog.kennel_id)
    return (
        <section className="flex mx-auto w-4/5 modal flex justify-center items-center text-center shadow-xl my-4">
            {props.submitting ? (
            <div>
                <h2 className="submitted-header">Thank you for your interest in {props.dog.name}!</h2>
                <p>Keep an eye on your inbox for a message from {kennel.name}</p>
                <button className="close-btn hover:bg-red-800">Close</button>
            </div>
            )
            :
            (
            <>
            <div style={leftStyles}></div>
            <DogRequestForm dog={props.dog} submitRequest={props.submitRequest}/>
            </>
            )
        
        }
            
        </section>
    )
}
