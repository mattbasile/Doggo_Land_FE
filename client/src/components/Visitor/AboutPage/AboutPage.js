import React from 'react'
import NavBar from '../HomePage/NavBar'
import Footer from '../../Footer'
import Baxter from '../../../imgs/baxter.jpg'

export default function AboutPage(props) {
    let image_styles = {
        height: "auto",
        backgroundImage: Baxter,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", 
        backgroundSize: "cover",
        width: "60%"
    }
    return (
        <div>
           <NavBar {...props}/>
           <section className="flex">
            <div style={image_styles} className=""></div>
            <div className="text-header p-12">
                <h2 className="text-2xl font-bold body-font dog-title">Welcome to Doggo Land!</h2>
                <p className="text py-4 pr-4">
                    This website was built for  a multi part blog series on building a fullstack application with JavaScript. You can find the collection of blog posts here. 
                </p>
                <p className="text py-4 pr-4">
                    I hope you enjoyed the site and if you have any questions at all please don’t hesitate to contact me! 
                </p>
            
            <a onClick={() => {props.history.push('/contact')}} className="contact-btn contact-two font-blue inline-block">
                Contact Matt
            </a>
            </div>
        </section>
           <Footer/>
        </div>
    )
}
