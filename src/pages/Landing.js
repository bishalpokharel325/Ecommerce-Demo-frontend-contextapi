import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import CategoryHoverLists from '../components/CategoryHoverLists'
import Categoryitem from '../components/Categoryitem'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import ProductCard from '../components/ProductCard'
import './Landing.css'

const Landing = () => {
    // http://localhost:8000/api/categories/primarycategories
    
    const [primary, setPrimary] = useState([])
    const [category_hovered, setCategoryHovered] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/categories/primarycategories")
        .then((data)=>{
            setPrimary(data.data)
        })
    },[])
    return (
        <div className="landing">
            <Navbar1/>
            <Navbar2 firstname="Bishal" cartitems="555" cartprice="1000"/>
            <div className="landing__body">
                <div className="landing__top">
                    <div className="landing__top__left">
                        <div className="landing__categories">
                            <h4>Top Categories</h4>
                            {primary.map((item)=>{
                                return (
                                    <span onMouseOver={()=>{
                                        setCategoryHovered(item.id)
                                    }}
                                    onMouseOut={()=>{
                                        setCategoryHovered(null)
                                    }}>
                                        <Categoryitem key={item.id} title={item.title}/>
                                        <CategoryHoverLists hover_id={category_hovered}/>
                                    </span>
                                
                                )
                            })}
                        </div>
                    </div>
                            {/* Hover Space */}
                    <div className="landing__top__middle">
                            {/* <CategoryHoverLists/> */}
                            <Carousel/>
                    </div>
                    <div className="landing__top__right">
                        <div className="ad__container">
                            Ads Here
                        </div>
                    </div>
                </div>
                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Fresh Sales
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>



                 <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Trending Products
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>

                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Recommendations for you
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>


                <div className="landing__fresh__sales">
                    <div className="fresh__sales__top">
                            Newest Products
                    </div>
                    <hr/>
                    <div className="fresh__sales__middle">
                            <ProductCard title="product title" price="300.00" rating={5} src="./product1.jpeg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product2.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product4.jpg"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>
                            <ProductCard title="product title" price="300.00" rating={1.5} src="./product3.png"/>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Landing
