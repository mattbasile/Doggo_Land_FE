import React, {useState} from 'react'
import './visitors_utils.css'
import DropDown from './Dropdown'

export default function DogFilter(props) {
    const [selected, changeSelected] = useState('');
    const [hiddenDropDown, toggleDropDown] = useState(true);
    const [filteredValues, assignValues] = useState([]);

    const handleMenuClick = (ev) =>{
      changeSelected(ev.target.innerText)
      toggleDropDown(false)
      let clicked = ev.target.innerText.toLowerCase();
      if(Array.isArray(props.dogs[0][clicked])){
        let filterValues  = props.dogs.filter(dog =>dog[clicked][0]!=undefined)
        let sortedValues = filterValues.map(dogs => dogs[clicked][0])
        assignValues(sortedValues);
      }
      else{
        if(clicked === "age"){
          clicked = "Age"
          let sortedValues = props.dogs.map(dog=>dog[clicked]);
          assignValues(sortedValues);
        }
        if(clicked === 'size'){
          clicked ="Size"
          let sortedValues = ["Small", "Medium", "Large"]
          assignValues(sortedValues);
        }
        if(clicked === "location"){
          let filterValues  = props.kennels.filter(kennel=>kennel[clicked]!=null)
          let sortedValues = filterValues.map(kennel=>kennel[clicked])
          assignValues(sortedValues);
        }
      }
    }
    
    return (
      <>
        <section className="flex w-3/5 mx-auto justify-around my-8 body-font font-extrabold blue-font text-2xl">
          <p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Breeds" ? "selected" : "filter"}>Breeds</p>
          {props.kennelPage ? 
          (<p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Age" ? "selected" : "filter"}>Age</p>)
          :
          (<p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Location" ? "selected" : "filter"}>Location</p>)
          }
          <p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Size" ? "selected" : "filter"}>Size</p>
        </section>
          {hiddenDropDown ? null : <DropDown hiddenDropDown={hiddenDropDown} toggleDropDown={toggleDropDown} handleFilteringCards={props.handleFilteringCards} values={filteredValues} selected={selected}/>}
      </>

    )
}

