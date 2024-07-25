import React from 'react'
import "./Offer.css";
import exclusiveImage from "../Assets/exclusive_image.png"

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on best seller products</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusiveImage} alt="exclusive"/>
        </div>
    </div>
  )
}

export default Offer