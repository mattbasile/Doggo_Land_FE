import React from 'react'
import NavBar from '../HomePage/NavBar'
import Footer from '../../Footer'

export default function ContactPage(props) {
    
    return (
        <div>
           <NavBar {...props}/>
           <section className="text-center w-full mx-auto p-16">
                <h2 className="text-2xl font-bold body-font dog-title">Get in Touch.</h2>
                <p className="text py-4 pr-4">
                    Please don’t hesitate to reach out with any questions!
                </p>
                <div className="flex mx-auto w-full justify-center mt-4">
                    <button className="flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-2 rounded mr-2 hover:bg-blue-700 hover:text-blue-200">
                        <i className="fab text-2xl fa-twitter "></i>
                        <p className="text-xl ml-2">Twitter</p>
                    </button>
                    <button className="flex items-center bg-purple-200 text-purple-700 font-semibold px-3 py-2 rounded ml-2 hover:bg-purple-700 hover:text-purple-200">
                        <i className="fab text-2xl  fa-medium"></i>
                        <p className="text-xl ml-2">Medium</p>
                    </button>
                </div>
          </section>
           <Footer/>
        </div>
    )
}
