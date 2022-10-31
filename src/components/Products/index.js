import React,{useContext} from 'react'
import {AppContext} from '../context/productContext';
import  Product from '../Product';
import './style.css';
const Products = () => {

    const products = useContext(AppContext)
  return (
    <div className="products-container">
    {products.map((currElem,index)=>{
        return <Product products = {currElem} key={index}/>
    })}
    </div>
  )
}

export default Products;
