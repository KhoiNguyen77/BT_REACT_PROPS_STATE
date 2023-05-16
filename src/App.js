import React, { Component } from 'react'
import ShoeStore from './Component/ShoeStore'
import ProductList from './Component/ProductList'
import Modal from './Component/Modal'
export default class App extends Component {


  render() {
    return (
      <div>
        <ShoeStore>
        </ShoeStore>
      </div>
    )
  }
}
