import React from 'react'
import './kennel-page.css'


export default function Header(props) {
    let counter = 0
    props.dogs.forEach(dog=>{
        if(dog.kennel_id === props.kennel.id){
            counter += 1
    }})
    let image_styles = {
        height: "auto",
        backgroundImage: `url(${props.kennel.img_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        width: "60%"
    }
    return (
        <>
        <section className="flex">
        <div style={image_styles} className="kennel-image-header">

        </div>
        <div className="text-header p-12">
            <h2 className="text-2xl font-bold body-font">{props.kennel.name}</h2>
            <p className="kennel-text py-4 pr-4">
            {props.kennel.bio}
            </p>
        <div className="flex w-full items-baseline justify-between my-4 pr-4">
            <div className="flex ">
                <i className="fas fa-dog text-2xl"></i>
                {/* {console.log(props.kennel.dogs.length)} */}
                <p className="text-xl ml-2">{
                    counter
                }</p>
            </div>
            <div className="flex">
                <i className="fas fa-home text-xl"></i>
                <p className="body-font font-normal ml-2 text-md"> {props.kennel.location}</p>
            </div>
            <div className="flex items-baseline ">
                <i className="fas fa-phone text-xl"></i>
                <p className="body-font font-normal ml-2 ">{props.kennel.phone}</p>
            </div>
        </div>
        <button className="contact-btn ">
            Contact Kennel
        </button>
        </div> 
    </section>
        
        
        </>
        
    )
}
