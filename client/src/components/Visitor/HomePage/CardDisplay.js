import React, { Component } from 'react'
import DogCard from '../DogCard'
import KennelCard from '../KennelCard'
import DogFilter from '../DogFilter'
import DropDown from '../Dropdown'

export default function CardDisplay(props) {
  return (
    <>
    <div id="cards" className="blue-background w-full">
        <div className="flex justify-between w-1/3 mx-auto h-24 items-center body-font  text-white">
            <h3 onClick={(e)=>{props.showDogs(e)}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Dogs</h3>
            <h3 onClick={(e)=>{props.showKennels(e)}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Kennels</h3>
        </div>
    </div>
    <section className="mt-16">
      {props.displayKennels ? null : <DogFilter dogs={props.dogs} kennelPage={false}/>}
      <div className="flex flex-wrap justify-around mx-auto">
        {props.displayKennels ?
         (props.kennels.map(kennel=>{
          return <KennelCard kennel={kennel} key={kennel.id}/>
        }))
         :(
          props.dogs.map(dog=>{
            return <DogCard requestDog={props.requestDog} dog={dog} key={dog.id}/>
          })
        )}
      </div>
        
    </section>
    </>
  )
}
