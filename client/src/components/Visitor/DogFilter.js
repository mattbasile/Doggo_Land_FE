import React from 'react'
import './visitors_utils.css'

export default function DogFilter(props) {
    return (
        <section className="flex w-3/5 mx-auto justify-around my-8 body-font font-extrabold blue-font text-2xl">
          <p className="filter">Breed</p>
          {props.kennelPage ? 
          (<p className="filter">Age</p>)
          :
          (<p className="filter">Location</p>)
          }
          <p className="filter">Size</p>
        </section>

    )
}
