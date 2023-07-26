import React from 'react';
import Product from './product';

class Products extends React.Component {
    
    state = {
        products :[
            {id:1,count:2,productName:'laptop',imgUrl:'https:/picsum.photos/200'},
            {id:2,count:1,productName:'phone',imgUrl:'https:/picsum.photos/300'},
            {id:3,count:4,productName:'airpods',imgUrl:'https:/picsum.photos/100'},
        ]
    }
    render(){
        return (
            <>
            {/* <Product productName="laptop"/>
            <Product productName="tablet"/>
            <Product productName="mobile "/> */}
            {this.state.products.map((p,index)=>(
                <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} imgUrl={p.imgUrl}>
                    <p>قیمت عالی و ارزان</p>
                </Product>
            ))}
            </>
        )
    }

    handleDelete = (productId) => {
        console.log(productId);
        const newProducts = this.state.products.filter(p=>p.id !== productId);
        console.log(newProducts);
        this.setState({products:newProducts});
    }
}

export default Products ;