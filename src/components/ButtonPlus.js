import React, { useContext } from 'react'
import { cartnoContext } from '../App'

const ButtonPlus = () => {
    const {cartno,setCartno}=useContext(cartnoContext)
    return (
        <div>
            <button className="button_change" onClick={()=>{
                setCartno(cartno=>cartno+1)
            }}>+</button>
        </div>
    )
}

export default ButtonPlus
