import React, {useState} from 'react'
import './visitors_utils.css'
import DropDown from './Dropdown'

export default function DogFilter(props) {
    const [selected, changeSelected] = useState('');
    const [hiddenDropDown, toggleDropDown] = useState(true);
    const [filteredValues, assignValues] = useState([]);
    const handleMenuClick = (ev) =>{
      changeSelected(ev.target.innerText)
      const currentDisplay = hiddenDropDown;
      const clicked = ev.target.innerText.toLowerCase();
      let filterValues  = props.dogs.filter(dog =>dog[clicked][0]!=undefined)
      let sortedValues = filterValues.map(dogs => dogs[clicked][0])
      assignValues(sortedValues);
      toggleDropDown(!currentDisplay);
    }
    return (
        <section className="flex w-3/5 mx-auto justify-around my-8 body-font font-extrabold blue-font text-2xl">
          <p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Breeds" ? "selected" : "filter"}>Breeds</p>
          {props.kennelPage ? 
          (<p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Age" ? "selected" : "filter"}>Age</p>)
          :
          (<p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Location" ? "selected" : "filter"}>Location</p>)
          }
          <p onClick={(ev)=>handleMenuClick(ev)} className={selected === "Size" ? "selected" : "filter"}>Size</p>
          {hiddenDropDown ? null : <DropDown values={filteredValues}/>}
        </section>
        

    )
}

