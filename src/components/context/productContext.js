import React, { createContext, useEffect,useState } from 'react'
import axios from 'axios';

const AppContext = createContext();

const API = 'https://fakestoreapi.com/products';

const AppProvider = ({children})=>{
    const [product,setProduct] = useState([]);

    const getProductData =async ()=>{
        try{
            const res = await axios.get(API);
            const result = await res.data;
            setProduct(result)
        }catch(error){
            console.log('Product not available');
        }
    }
    

    useEffect(()=>{
        getProductData();
    },[])
    return(
        <AppContext.Provider value={product}>
            {children}
        </AppContext.Provider>
    ) 
}

export {AppProvider,AppContext}