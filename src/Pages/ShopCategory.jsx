import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import {ShopContext} from "../Context/ShopContext";
import dropdownIcon from "../components/Assets/dropdown_icon.png"
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const {allProducts} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopCategory-banner' src={props.banner} alt="banners"/>
      <div className="shopCategory-index-sort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopCategory-sort">
          Sort By <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {
          allProducts.map((item,index) => {
            if(props.category === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null;
            }
          })
        }
      </div>
      <div className="shopCategory-loadmore">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory