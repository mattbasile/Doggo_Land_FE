import React from 'react'
import './dog-page.css'


export default function Header() {
    return (
        <section className="flex">
            <div className="image-header h-auto">

            </div>
            <div className="text-header p-12">
                <h2 className="text-2xl font-bold body-font dog-title">Baxter</h2>
                <p className="text py-4 pr-4">
                Baxter is a 2 year old boy French Bulldog looking for a new home. He’s currently located at the Benhurst Kennel. 
                </p>
            <div className="flex w-full items-baseline justify-between my-4 pr-4">
                <div className="flex ">
                    <i className="fas fa-dog text-2xl"></i>
                    <p className="text-xl ml-2">Pug</p>
                </div>
                <div className="flex">
                    <i className="far fa-calendar-alt text-xl"></i>
                    <p className="body-font font-normal ml-2 text-md"> 2 Years</p>
                </div>
                <div className="flex items-baseline ">
                    <i className="fas fa-phone text-xl"></i>
                    <p className="body-font font-normal ml-2 ">(111)-222-3333</p>
                </div>
            </div>
            <div>
            <button className="contact-btn contact-two font-blue">
                Contact Kennel
            </button>
            <button className="contact-btn ">
                Meet Baxter
            </button>
            </div>
            
            </div> 



        </section>
    )
}
