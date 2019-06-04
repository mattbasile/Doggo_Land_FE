import React from 'react'
import './Form.css'

export default function Form(props) {
    return (
        <section className="login-form flex">
            <div className="dog-img w-1/2"></div>
            {!props.registerView ? 
            <form className=" w-1/2 flex flex-col ">
                <h3 className="text-center text-3xl body-font font-bold text-blue-900 mt-16">Thank you for helping us find homes!</h3>
                <label className="mt-16 mb-4 body-font font-bold text-2xl text-blue-900  px-16">Login</label>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2">Username:</label>
                <input name="username" onChange={(e)=>props.handleInput(e)} className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Password:</label>
                <input name="password" onChange={(e)=>props.handleInput(e)} className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"/>
                <p onClick={()=>props.toggleRegister()} className="text-center underline italic font-medium text-xl text-blue-900 hover:text-blue-700">Need to Register?</p>
                <button className="bg-white px-16 mt-8 text-2xl font-bold py-1 rounded mx-auto text-blue-900 hover:text-white hover:bg-blue-900">Submit</button>
            </form>
            :
            (<form className=" w-1/2 flex flex-col ">
                <h3 className="text-center text-3xl body-font font-bold text-blue-900 mt-16">Thank you for helping us find homes!</h3>
                <label className="mt-16 mb-4 body-font font-bold text-2xl text-blue-900  px-16">Register</label>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2">Username:</label>
                <input name="username" onChange={(e)=>props.handleInput(e)} className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Password:</label>
                <input name="password" onChange={(e)=>props.handleInput(e)} className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Kennel Name:</label>
                <input name="kennel_name" onChange={(e)=>props.handleInput(e)} className="mx-16 rounded p-2 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"/>
                <p onClick={()=>props.toggleRegister()} className="text-center underline italic font-medium text-xl text-blue-900 hover:text-blue-700">Already Registered?</p>
                <button className="bg-white px-16 mt-8 text-2xl font-bold py-1 rounded mx-auto text-blue-900 hover:text-white hover:bg-blue-900">Register</button>
            </form>)
            }

        </section>

        
        
    )
}
