import React, { useContext } from 'react'
import "./ProductDisplay.css"
import starIcon from "../Assets/star_icon.png"
import stardullIcon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addtoCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
                <img src={product.image} alt="productimage"/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="productimage"/>
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={starIcon} alt="staricon"/>
                <img src={starIcon} alt="staricon"/>
                <img src={starIcon} alt="staricon"/>
                <img src={starIcon} alt="staricon"/>
                <img src={stardullIcon} alt="dull"/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Discover the perfect blend of comfort and style with our premium fabrics. Our men's shirts are crafted from breathable, soft cotton that ensures all-day comfort and a polished look. For women, we offer an array of elegant and durable fabrics that effortlessly combine chic style with everyday practicality.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addtoCart(product.id)}}>Add to Cart</button>
            <p className="productdisplay-right-category">
                <span>Category: </span> Women,TShirt,Crop Top
            </p>
            <p className="productdisplay-right-category">
                <span>Tags: </span> Modern,Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay