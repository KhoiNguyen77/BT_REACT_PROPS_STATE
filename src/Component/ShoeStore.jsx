import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import { products } from '../products';
export default class ShoeStore extends Component {
    state = {
        productDetail: {},
    }
    setStateModal = (clickedProduct) => {
        this.setState({
            productDetail: clickedProduct
        })
    }
    render() {
        return (
            <div>
                <h3 className='text-center'>Shoes Shop</h3>
                <ProductList productsData={products} setStateModal={this.setStateModal}></ProductList>
                <Modal content={this.state.productDetail}></Modal>
            </div>
        )
    }
}
