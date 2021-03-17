import React, { useContext } from 'react'
import { cartnoContext } from '../App'

const Buttonminus = () => {
    const {cartno,setCartno}=useContext(cartnoContext)
    return (
        <div>
            <button className="button_change" onClick={
                ()=>{
                    if(cartno>0){
                        setCartno(cartno=>cartno-1)
                    }
                
                
            }}>-</button>
        </div>
    )
}

export default Buttonminus
