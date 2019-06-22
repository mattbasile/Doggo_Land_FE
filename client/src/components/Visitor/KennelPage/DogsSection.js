import React from 'react'
import DogCard from '../DogCard'
import DogFilter from '../DogFilter'


export default function DogsSection(props) {
    return (
        <section>
            <div className="blue-background h-24 text-center flex justify-center items-center text-white mb-6">
                <h2 className="text-5xl font-normal title-font tracking-wide">Our Dogs</h2>
            </div>
            <DogFilter kennelPage={true}/>
            <div className="flex flex-wrap mx-auto justify-around">
            {props.kennel.dogs.map(dog=>{
                return <DogCard key={dog.id} dog={dog}/>
            })}


            </div>
            <div className="blue-background w-1/5 mx-auto py-4 px-2 rounded-full text-white flex items-center mb-8">
                <button className="w-5/6 text-2xl font-semibold body-font">View More Dogs</button>
                <i className="text-4xl  w-1/6 far fa-arrow-alt-circle-down justify-s-end"></i>
            </div>
        </section>
    )
}
