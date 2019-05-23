import React from 'react'

export default function DogCard() {
    return (
        <div className="dog-card my-8">
            <div className="card-img rounded-t-sm"></div>
            <div className="card-text px-4">
                <div className="flex items-center">
                    <p className="text-3xl body-font font-extrabold">Baxter</p>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center blue-background body-font text-white mx-2 ">M</div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center green-background body-font text-white">Sm</div>
                </div>
                <p className="body-font font-normal">Baxter is a 2 year old boy French Bulldog looking for a new home. He’s currently located at the Benhurst Kennel.</p>
            </div>
            <div className="card-text bg-gray-100 rounded-b-sm text-center body-font ">
                <button className="w-4/5 blue-background text-white h-8 rounded mx-auto my-6 font-semibold">Learn More</button>
                <button className="w-4/5 green-background text-white h-8 rounded mx-auto  font-semibold">Contact Kennel</button>
            </div>
        </div>
    )
}
