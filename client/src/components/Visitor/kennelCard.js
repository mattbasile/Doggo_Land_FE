import React from 'react'

export default function KennelCard() {
    return (
        <div className="card my-8">
            <div className="card-img rounded-t-sm"></div>
            <div className="card-text px-4">
                <div className="flex items-baseline justify-between">
                    <p className="text-3xl body-font font-extrabold">Benhurst Kennel</p>
                    <div className="flex ">
                        <i className="fas fa-dog text-2xl"></i>
                        <p className="text-xl ml-2">12</p>
                    </div>
                    
                </div>
                <p className="body-font font-normal text-sm">The Benhurst Kennel has been around fron 25 years. They’ve connected over 10,000 families with their new best friends.</p>
                <div className="flex mt-4">
                    <div className="flex w-1/2 items-baseline ">
                        <i className="fas fa-home text-xl"></i>
                        <p className="body-font font-normal ml-2 text-md"> Benhurst, New York</p>
                    </div>
                    <div className="flex w-1/2">
                    <div className="flex items-baseline ">
                        <i className="fas fa-phone text-xl"></i>
                        <p className="body-font font-normal ml-2 ">(111)-222-3333</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card-text bg-gray-100 rounded-b-sm text-center body-font ">
                <button className="w-4/5 blue-background text-white h-8 rounded mx-auto my-6 font-semibold hover:bg-blue-700">Learn More</button>
                <button className="w-4/5 green-background text-white h-8 rounded mx-auto  font-semibold hover:bg-green-700">Contact Kennel</button>
            </div>
        </div>
    )
}
