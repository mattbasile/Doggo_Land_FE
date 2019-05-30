import React from 'react'
import {Link} from 'react-router-dom'


export default function KennelCard(props) {
    let image_styles = {
        height: "55%",
        background: `lightblue url(${props.kennel.img_url}) no-repeat center center`, 
        backgroundSize: "cover"
    }
    return (
        <div className="card my-8 flex flex-col justify-between">
            <div style={image_styles} className="rounded-t-sm"></div>
            <div className="card-text px-4">
                <div className="flex items-center justify-between">
                    <p className="text-3xl body-font font-extrabold">{props.kennel.name}</p>
                    <div className="flex ">
                        <i className="fas fa-dog text-2xl"></i>
                        <p className="text-xl ml-2">{props.kennel.dogs.length}</p>
                    </div>
                    
                </div>
                <p className="body-font font-normal text-sm">{
                    props.kennel.bio.length > 100 ? (`${props.kennel.bio.substring(0,100)}...`)
                    :props.kennel.bio 
                    } </p>
                <div className="flex mt-4">
                    <div className="flex w-1/2 items-baseline ">
                        <i className="fas fa-home text-xl"></i>
                        <p className="body-font font-normal ml-2 text-md"> {props.kennel.location}</p>
                    </div>
                    <div className="flex w-1/2">
                    <div className="flex items-baseline ">
                        <i className="fas fa-phone text-xl"></i>
                        <p className="body-font font-normal ml-2 ">{props.kennel.phone}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card-text bg-gray-100 rounded-b-sm text-center body-font ">
                <Link to={`/kennels/${props.kennel.id}`} className="w-4/5 blue-background text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-700 flex justify-center items-center">Learn More</Link>
                <button className="w-4/5 green-background text-white h-8 rounded mx-auto  font-semibold hover:bg-green-700">Contact Kennel</button>
            </div>
        </div>
    )
}
