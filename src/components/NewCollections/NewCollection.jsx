import React from 'react'
import "./NewCollection.css";
import newCollection from "../Assets/new_collections";
import Item from '../Item/Item';

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collection">
            {
                newCollection.map((item,index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default NewCollection