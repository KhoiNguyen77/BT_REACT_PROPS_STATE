import React, { Component } from 'react'
import ProductItem from './ProductItem';


export default class ProductList extends Component {

  render() {
    const { productsData } = this.props;
    return (
      <div className='container'>
        <div className="row">
          {productsData.map(product => {
            return <div className='col-4 mt-4'>
              <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal" key={product.id} style={{ cursor: 'pointer' }} onClick={()=> {
                this.props.setStateModal(product)
              }}>
                <img src={product.image} alt={product.name} />
                <ProductItem item={product} setStateModal={this.props.setStateModal}></ProductItem>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
