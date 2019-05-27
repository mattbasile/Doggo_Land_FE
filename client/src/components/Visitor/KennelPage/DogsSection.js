import React from 'react'
import DogCard from '../DogCard'


export default function DogsSection() {
    return (
        <section>
            <div className="blue-background h-24 text-center flex justify-center items-center text-white">
                <h2 className="text-5xl font-normal title-font tracking-wide">Our Dogs</h2>
            </div>
            <div className="flex flex-wrap mx-auto justify-around">
                <DogCard/>
                <DogCard/>
                <DogCard/>
                <DogCard/>
                <DogCard/>
                <DogCard/>
            </div>
            <div className="blue-background w-1/5 mx-auto py-4 px-2 rounded-full text-white flex items-center">
                <button className="w-5/6 text-2xl font-semibold body-font">View More Dogs</button>
                <i className="text-4xl  w-1/6 far fa-arrow-alt-circle-down justify-s-end"></i>
            </div>
        </section>
    )
}