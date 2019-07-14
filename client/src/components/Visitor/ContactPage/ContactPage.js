import React from 'react'
import NavBar from '../HomePage/NavBar'
import Footer from '../../Footer'

export default function ContactPage(props) {
    
    return (
        <div>
           <NavBar {...props}/>
           <section className="flex">
            <div className="text-header p-12">
                <h2 className="text-2xl font-bold body-font dog-title">Get in Touch.</h2>
                <p className="text py-4 pr-4">
                    Please don’t hesitate to reach out with any questions!
                </p>
            </div>
          </section>
           <Footer/>
        </div>
    )
}
