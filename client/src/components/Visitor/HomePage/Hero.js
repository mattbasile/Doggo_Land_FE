import React from 'react'


export default function Hero() {
    return (
        <header className="hero w-full">
            <div className=" ml-48 text-left pt-24">
                 <h2 className="title-font text-7xl text-white font-normal mx-auto">Find your best <br/>friend today!</h2>
                 <div className="w-1/3 flex justify-between mt-4 pr-12">
                    <button className="blue-background hover:bg-blue-700 text-white body-font font-bold py-2 px-4 rounded">
                        Search Dogs
                    </button>
                    <button className="green-background hover:bg-green-700 text-white body-font font-bold py-2 px-4 rounded">
                    Search Kennels
                    </button>
                </div>
            </div>
           
        </header>
    )
}
