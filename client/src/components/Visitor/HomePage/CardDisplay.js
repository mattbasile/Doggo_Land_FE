import React, { Component, useState } from 'react'
import DogCard from '../DogCard'
import KennelCard from '../KennelCard'
import DogFilter from '../DogFilter'
import DropDown from '../Dropdown'

export default function CardDisplay(props) {
  // Filtered cards, may need to add to APP
  
  const [filteringCards, setFilteringCardsValue] = useState();
  const [loading, setLoadingToggle] = useState(false);
  const handleFilteringCards = (value, param) =>{
    console.log(value, param)
    let clicked = value.toLowerCase();
    setLoadingToggle(true);
    if(Array.isArray(props.dogs[0][clicked])){
      let filterValues  = props.dogs.filter(dog =>dog[clicked][0] === param)
      setFilteringCardsValue(filterValues);
    }
    else if(clicked === 'location'){
        let filterKennels = props.kennels.filter(kennel=>kennel[clicked]===param);
        let kennel_ids = filterKennels.map(kennel=>kennel.id);
        let filterDogs = props.dogs.filter(dog=>kennel_ids.includes(dog.kennel_id));
        setFilteringCardsValue(filterDogs)
    }
    else{
      let lowerParam = param.toLowerCase()
      console.log(lowerParam)
      let filterValues = props.dogs.filter(dog=>dog[value]===lowerParam);
      console.log(filterValues)
      setFilteringCardsValue(filterValues);
    }
    setLoadingToggle(false);
  }

  return (
  loading ? <h1>Loading...</h1>
    :
   <>
   <div id="cards" className="blue-background w-full">
        <div className="flex justify-between w-1/3 mx-auto h-24 items-center body-font  text-white">
            <h3 onClick={(e)=>{props.showDogs(e)}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Dogs</h3>
            <h3 onClick={(e)=>{props.showKennels(e)}}className="text-5xl font-normal title-font tracking-wide cursor-pointer hover:underline">Kennels</h3>
        </div>
    </div>
    <section className="mt-16">
      {props.displayKennels ? null : <DogFilter handleFilteringCards={handleFilteringCards} dogs={props.dogs} kennels={props.kennels} kennelPage={false}/>}
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
