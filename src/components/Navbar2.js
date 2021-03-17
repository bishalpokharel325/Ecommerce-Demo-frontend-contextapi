import React, { useContext } from 'react'
import './Navbar2.css'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Avatar } from '@material-ui/core';
import { keywordContext,cartnoContext } from '../App';
import { Link } from 'react-router-dom';


const Navbar2 = ({firstname,cartitems,cartprice}) => {
    const {keyword,setKeyword}=useContext(keywordContext)
    const {cartno,setCartno}=useContext(cartnoContext)
    return (
        <div className="navbar2">
            <div className="navbar__left">
                <Link to="/">
                    <img src="./Elscript.png"/>
                </Link>
            </div>
            <div className="navbar__middle">
                <input placeholder="Search Anything" value={keyword} onChange={(e)=>{
                    setKeyword(e.target.value)
                }}/>
                <Link to="/products" className="navbar__middle__icon">
                    <SearchSharpIcon className="search__icon"/>
                </Link>      
            </div>
            <div className="navbar__right">
                <div className="navbar__right__cart">
                    <h4>Cart</h4>
                    <ShoppingCartSharpIcon className="cart__icon"/>
                    <p>{cartno}</p>
                    <h5 className="cart__price">${cartprice?cartprice:0.00}</h5>
                </div>
                <div className="navbar__right__signin">
                    {firstname?<h4>Hello, {firstname}</h4>:<h4>Sign In</h4>}
                    <Avatar/>
                    <KeyboardArrowDownIcon/>
                </div>
            </div>
            <div className="navbar2__dropdown">
                <a>Your Account</a>
                <a>Your Orders</a>
                <a>Shortlists</a>
                <a>Sign Out</a>
            </div>
        </div>
    )
}
export default Navbar2
