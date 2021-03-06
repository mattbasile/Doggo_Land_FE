import React from 'react'
import {Link} from 'react-router-dom'


export default function DogCard(props) {
    console.log(props.dog)
    let image_styles = {
            height: "55%",
            background: `lightblue url(${props.dog.img_url}) no-repeat center center`, 
            backgroundSize: "cover"
    }
    return (
        <div className="card my-8 flex flex-col justify-between">
            <div style={image_styles} className="rounded-t-sm"></div>
            <div className="card-text px-4">
                <div className="flex items-center">
                    <p className="text-3xl body-font font-extrabold">{props.dog.name}</p>
                    {props.dog.male >= 1 ? 
                    ( <div className="w-8 h-8 rounded-full flex items-center justify-center blue-background body-font text-white mx-2 ">M</div>)
                    : <div className="w-8 h-8 rounded-full flex items-center justify-center bg-pink-300 body-font text-white mx-2 ">F</div>
                    }
                    {props.dog.Size === "small" ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center green-background body-font text-white">Sm</div>
                    ) : props.dog.size ==="medium" ? (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-orange-500 body-font text-white">Md</div>
                    ) : (
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-500 body-font text-white">Lg</div>
                    )}
                   
                    
                </div>
                <p className="body-font font-normal ">{
                    props.dog.bio === null ? `${props.dog.name} is the goodest doggo...` : props.dog.bio.length > 90 ? (`${props.dog.bio.substring(0,90)}...`) : props.dog.bio 
                    } 
                </p>
            </div>
            <div className="card-text bg-gray-100 rounded-b-sm text-center body-font ">
                <Link to={`/dogs/${props.dog.id}`} className="w-4/5 blue-background text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-700 flex justify-center items-center">Learn More</Link>
                <button onClick={(e)=>props.requestDog(e,props.dog.id)} className="w-4/5 z-10 green-background text-white h-8 rounded mx-auto  font-semibold hover:bg-green-700">Contact Kennel</button>
            </div>
        </div>
    )
}
