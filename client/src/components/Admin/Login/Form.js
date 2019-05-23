import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <section className="login-form flex">
            <div className="dog-img w-1/2"></div>
            <form className=" w-1/2 flex flex-col ">
                <h3 className="text-center text-3xl body-font font-bold text-blue-900 mt-16">Thank you for helping us find homes!</h3>
                <label className="mt-16 mb-4 body-font font-bold text-2xl text-blue-900  px-16">Login</label>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2">Username:</label>
                <input className="mx-16 rounded py-2 mb-6" type="text"/>
                <label className=" px-16 block text-blue-900 text-sm font-semibold mb-2 ">Password:</label>
                <input className=" mx-16 rounded py-2 mb-6" type="password"/>
                <a href="" className="text-center underline italic font-medium text-xl text-blue-900 hover:text-blue-700">Need to Register?</a>
                <button className="bg-white px-16 mt-8 text-2xl font-bold py-1 rounded mx-auto text-blue-900 hover:text-white hover:bg-blue-900">Submit</button>
            </form>
        </section>
        
    )
}
