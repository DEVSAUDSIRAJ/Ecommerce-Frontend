import React, {useContext, useState} from 'react'
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setmenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>Shopify</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setmenu("shops")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu === "shops" ? <hr/> : <></>}</li>
            <li onClick={() => setmenu("mens")}><Link to='/mens'style={{textDecoration:'none'}}>Men</Link> {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={() => setmenu("womens")}><Link to='/womens'style={{textDecoration:'none'}}>Women</Link> {menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={() => setmenu("kids")}><Link to='/kids'style={{textDecoration:'none'}}>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cartIcon} alt="icon"/></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar