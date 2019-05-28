import React from 'react'
import './kennel-page.css'


export default function Header() {
    return (
        <section className="flex">
            <div className="kennel-image-header">

            </div>
            <div className="text-header p-12">
                <h2 className="text-2xl font-bold body-font">Benhurst Kennel</h2>
                <p className="kennel-gittext py-4 pr-4">
                The Benhurst Kennel has been around fron 25 years. They’ve connected over 10,000 families with their new best friends. The Benhurst Kennel has been around fron 25 years. They’ve connected over 10,000 families with their new best friends. The Benhurst Kennel has been around fron 25 years. They’ve connected over 10,000 families with their new best friends.
                </p>
            <div className="flex w-full items-baseline justify-between my-4 pr-4">
                <div className="flex ">
                    <i className="fas fa-dog text-2xl"></i>
                    <p className="text-xl ml-2">12</p>
                </div>
                <div className="flex">
                    <i className="fas fa-home text-xl"></i>
                    <p className="body-font font-normal ml-2 text-md"> Benhurst, New York</p>
                </div>
                <div className="flex items-baseline ">
                    <i className="fas fa-phone text-xl"></i>
                    <p className="body-font font-normal ml-2 ">(111)-222-3333</p>
                </div>
            </div>
            <button className="contact-btn ">
                Contact Kennel
            </button>
            </div> 



        </section>
    )
}
