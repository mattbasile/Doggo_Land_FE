import React from 'react'


export default function Hero() {
    return (
        <header className="hero w-full">
            <div className="w-1/2 pt-24">
                 <h2 className="title-font text-6xl text-white font-normal mx-auto w-1/2 ">Find your best <br/>friend today!</h2>
                 <div className="mx-auto w-1/2 flex justify-between mt-4">
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
