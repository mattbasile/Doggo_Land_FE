import React, {useState} from 'react'
import './visitors_utils.css'


export default function DogFilter(props) {
    const [selected, changeSelected] = useState('');
    console.log(selected);
    return (
        <section className="flex w-3/5 mx-auto justify-around my-8 body-font font-extrabold blue-font text-2xl">
          <p onClick={(ev)=>changeSelected(ev.target.innerText)} className={selected === "Breed" ? "selected" : "filter"}>Breed</p>
          {props.kennelPage ? 
          (<p onClick={(ev)=>changeSelected(ev.target.innerText)} className={selected === "Age" ? "selected" : "filter"}>Age</p>)
          :
          (<p onClick={(ev)=>changeSelected(ev.target.innerText)} className={selected === "Location" ? "selected" : "filter"}>Location</p>)
          }
          <p onClick={(ev)=>changeSelected(ev.target.innerText)} className={selected === "Size" ? "selected" : "filter"}>Size</p>
        </section>

    )
}

