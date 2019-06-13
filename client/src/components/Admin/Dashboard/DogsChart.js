import React from 'react'
import DogRow from './DogRow'


import './Dashboard.css'
export default function DogsChart(props) {
    return (
        <section className="flex flex-col p-8">
            <div className="flex items-center my-12">
                <h2 className="text-3xl body-font font-normal mr-4">Current Dogs</h2>
                <button onClick={(e)=>props.showModal(e)} className="add-dog-btn hover:bg-green-300">
                    <p className="mr-2">Add a Dog</p>
                    <i className="fas fa-plus-circle"></i>
                </button>
            </div>
            <div className=" w-4/5 mx-auto">
            <div className="bg-blue-500 text-white flex table-header text-center">
                <div className="table-row "></div>
                <div className="table-row">Name</div>
                <div className="table-row">Age</div>
                <div className="table-row">Sex</div>
                <div className="table-row">Size</div>
                <div className="table-row justify-center">Messages</div>
                <div className="table-row justify-center">Actions</div>
            </div>
            <div>
                {props.user.dogs.map((dog, i)=>{
                    const messages = props.messages.map(mes =>{
                        return mes.dog_id = dog.id
                    })
                    return <DogRow messages={messages} key={dog.id} dog={dog} even={i%2 ===0 ? false : true} last={i === props.user.dogs.length-1 ?true: false}/>
                })}
            </div>
            <div className="text-white flex table-footer text-center">
            </div>
            </div>
            
        </section>
    )
}
