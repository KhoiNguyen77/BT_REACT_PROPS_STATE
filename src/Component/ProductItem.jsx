import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { item } = this.props;
    const { setStateModal } = this.props;
    return (
      <div className="card-body" onClick={() => {
        setStateModal(item)
      }
      }>
        <h3>{item.name}</h3>
        <p>{item.price} $</p>
        <button className='btn btn-dark text-white'>
          Add To Cart
        </button>
      </div>
    )
  }
}
