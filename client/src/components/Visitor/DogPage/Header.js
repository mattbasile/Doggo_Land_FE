import React from 'react'
import './dog-page.css'


export default function Header(props) {
    let image_styles = {
        height: "auto",
        backgroundImage: `url(${props.dog.img_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        width: "60%"
    }
    return (
        <section className="flex">
            <div style={image_styles} className="">

            </div>
            <div className="text-header p-12">
                <h2 className="text-2xl font-bold body-font dog-title">{props.dog.name}</h2>
                <p className="text py-4 pr-4">
                 {props.dog.bio}
                </p>
            <div className="flex w-full items-baseline justify-between my-4 pr-4">
                <div className="flex ">
                    <i className="fas fa-dog text-2xl"></i>
                    {props.dog.breeds.map(breed=>{
                       return <p className="text-xl ml-2">{breed}</p>
                    })}
                </div>
                <div className="flex">
                    <i className="far fa-calendar-alt text-xl"></i>
                    <p className="body-font font-normal ml-2 text-md"> {props.dog.Age} Years</p>
                </div>
                <div className="flex items-baseline ">
                    <i className="fas fa-phone text-xl"></i>
                    <p className="body-font font-normal ml-2 ">{props.kennel.phone}</p>
                </div>
            </div>
            <div>
            <a href={`mailto:${props.kennel.email}`} className="contact-btn contact-two font-blue inline-block">
                Contact Kennel
            </a>
            <button onClick={(e)=>props.requestDog(e,props.dog.id)} className="contact-btn">
                Meet {props.dog.name}
            </button>
            </div>
            
            </div> 



        </section>
    )
}
