import React from 'react'
import DogCard from '../DogCard'
import KennelCard from '../KennelCard'

export default function CardDisplay(props) {
    return (
        <>
        <div className="blue-background w-full">
            <div className="flex justify-between w-1/3 mx-auto h-24 items-center body-font  text-white">
                <h3 className="text-5xl font-normal title-font tracking-wide">Dogs</h3>
                <h3 className="text-5xl font-normal title-font tracking-wide">Kennels</h3>
            </div>
        </div>
        <section className="mt-16">
          <div className="flex flex-wrap justify-around mx-auto">
            {
              props.dogs.map(dog=>{
                return <DogCard dog={dog} key={dog.id}/>
              })
            }
          </div>
            
        </section>
        </>
    )
}
