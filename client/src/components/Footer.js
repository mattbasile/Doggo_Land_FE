import React from 'react'

export default function Footer() {
    return (
        <footer className="flex h-24 justify-center items-center body-font blue-background text-white mt-6">
            <h1 className="text-5xl font-normal title-font tracking-wide">Doggo Land</h1>
            <p className="text-5xl font-normal title-font tracking-wide ml-2" >
                ©
            </p>
            <p className="text-5xl font-normal title-font tracking-wide ml-1">{new Date().getFullYear()}</p>
        </footer>
    )
}
