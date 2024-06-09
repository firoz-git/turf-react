import React from 'react'
import { Link } from 'react-router-dom'
const Slide = (props) => {
    const { img, title, content } = props
    console.log(props)
    return (
        <div className="item">
            <img alt="Third slide" src={img} className="img-responsive" />
            <div className="container">
                <div className="carousel-caption ">
                    <h1 className="v2">{title}</h1>
                    <p className="p-v2"><span className="line-t"></span>Turfs & Playgrounds <span className="line-b"></span></p>
                </div>
            </div>
        </div>
        

    )
}

export default Slide
