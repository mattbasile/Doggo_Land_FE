import React from 'react'
import './Dashboard.css'

export default function DogRow(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <div  className={props.even && props.last ? "blue-row flex w-full table-footer" : props.even ? "blue-row flex w-full" : "flex w-full"}>
                <div className="table-row justify-center">
                    <button className="w-16 h-16 rounded-full flex items-center justify-center bg-red-300 body-font text-red-800 mx-2">
                    </button>
                </div>
                <div className="table-row">
                    <p>{props.dog.name}</p>
                </div>
                <div className="table-row">
                    <p>{props.dog.Age}</p>
                </div>
                <div className="table-row">
                    <p>{capitalize(props.dog.Size)}</p>
                </div>
                <div className="table-row">
                    <p>{props.dog.male === 1 ? "Male" : "Female"}</p>
                </div>
                <div className="table-row justify-center">
                <p className="w-8 h-8 rounded-full flex items-center justify-center bg-green-300 body-font font-semibold text-green-800 mx-2 ">{props.messages.length}</p>
            </div>
            <div className="table-row justify-center">
                <i className="far fa-edit text-2xl text-blue-900 mr-3"></i>
                <i className="far fa-trash-alt text-2xl text-red-600"></i>
            </div>
        </div>
    )
}
