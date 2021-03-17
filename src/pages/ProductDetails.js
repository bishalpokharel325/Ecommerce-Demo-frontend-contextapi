import React, { useEffect, useState } from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import ReactImageZoom from 'react-image-zoom';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

import './ProductDetails.css'
import axios from 'axios';
import showStars from '../modules/showStars';
import ButtonPlus from '../components/ButtonPlus';
import Buttonminus from '../components/Buttonminus';

const ProductDetails = ({match}) => {
    const [no,setNo]=useState(0)
    const [totalprice,setTotalPrice]=useState(0)
    const [productdetails, setproductDetails] = useState(
        {})
    const [image_url, setImageurl] = useState("")
    
    useEffect(() => {
        axios
        .get(`/api/products/productdetails/${match.params.slug}`)
        .then((data)=>{
            console.log(data.data)
           setproductDetails(data.data)
           setImageurl(data.data.image)
           
        })
    },[])
    const zoom_props = {scale:1,zoomWidth:500,img: 'http://localhost:8000'+image_url};
    return (
        <div className="product__details">
            <Navbar1/>
            <Navbar2/>
            <div className="product__detail__body">
                <div className="product__detail__top">
                    <div className="detail__top__left">
                        <ReactImageZoom {...zoom_props}/>
                    </div>
                    <div className="detail__top__middle">
                        <h3>{productdetails.title}</h3>
                         <div className="rating__div">
                            <span>{productdetails.rating&&showStars(productdetails.rating)}</span>
                            <span className="rating__number">({productdetails.rating&&productdetails.rating}/5) of 143 ratings</span>
                        </div>
                        <a href="#"><span>Read 49 reviews from customers</span></a>
                        <h2>Price:&emsp; ${productdetails.price}</h2>
                        
                         <div className="card__wide__cartarea">
                             <h2>Add to Cart:</h2>
                        <ShoppingCartSharpIcon className="cart__icon"/>
                        <div  onClick={()=>{

                            setNo(no=>no+1)
                            setTotalPrice(price=>price+parseInt(productdetails.price))
                        
                    }}>
                            <ButtonPlus/>
                        </div>
                    
                <h3>{no}</h3>
                <p>(${totalprice})</p>
                <div onClick={()=>{
                    if(no>0){
                            setNo(no=>no-1)
                            setTotalPrice(price=>price-parseInt(productdetails.price))
                    }
                    }}>
                    <Buttonminus />
                </div>
                
                </div>
                <p>{productdetails.description}</p>
                    </div>
                    <div className="detail__top__right">
                        top right
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails
