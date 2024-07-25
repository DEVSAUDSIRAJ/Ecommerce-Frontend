import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext'
import removeIcon from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    const {getTotalCartAmount,allProducts,cartItems,removefromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartItems-formal-main">
            <p>Products</p>
            <p>title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
            allProducts.map((e) => {
                if(cartItems[e.id] > 0){
                    return <div>
                        <div className="cartitems-format cartItems-formal-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={removeIcon} onClick={() => {removefromCart(e.id)}}    alt="removeicon"/>
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })
        }
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If You have a promo code Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text"placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems