import React from 'react';
import { useState } from 'react/cjs/react.development';

let ProductContext=React.createContext();

export default ProductContext;

export const ProductProvider=({children})=>{
    const [productList,setProductList]=useState([])
    return <ProductContext.Provider value={{productList,setProductList}}>
        {children}
    </ProductContext.Provider>
}


