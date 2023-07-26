 import Product from "./product";
 import { useState } from "react";

 const Products = () =>{

 const[products,setProducts]=useState([
        {id:1,count:2,productName:'laptop',imgUrl:'https:/picsum.photos/200'},
        {id:2,count:1,productName:'phone',imgUrl:'https:/picsum.photos/300'},
        {id:3,count:4,productName:'airpods',imgUrl:'https:/picsum.photos/400'},
    ])

    return(
        <>
            {products.map((p,index)=>(
                <Product onDelete={handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} imgUrl={p.imgUrl}>
                    <p>قیمت عالی و ارزان</p>
                </Product>
            ))}
        </>
    )

    function handleDelete(productId){
        console.log(productId);
        const newProducts =products.filter(p=>p.id !== productId);
        console.log(newProducts);
        setProducts(newProducts);
    }
 }

 export default Products;