import React from 'react'
import "./Hero.css"
import handIcon from "../Assets/hand_icon.png"
import arrowIcon from "../Assets/arrow.png"
import heroImage from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={handIcon} alt="handicon"/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrowIcon} alt="arrowIcon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt="heroImage" />
        </div>
    </div>
  )
}

export default Hero