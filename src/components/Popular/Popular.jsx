import React from 'react'
import "./Popular.css"
import data from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in Womens</h1>
        <hr/>
        <div className="popular-item">
            {
                data.map((item,index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular