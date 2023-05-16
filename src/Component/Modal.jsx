import React, { Component } from 'react'

export default class Modal extends Component {

  render() {
    const { content } = this.props;
    return (
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Shoes Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='fs-5 fw-bold'>Shoes name: {content.name}</p>
              <p className='fs-5'>Description: {content.description}</p>
              <p className='fs-5 ' style={{fontStyle:'italic'}}>In Stock: {content.quantity}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
