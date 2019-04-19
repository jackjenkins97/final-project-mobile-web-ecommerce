import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component {
  render() {
    
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,category,img,info,price,title,inCart} =
          value.detailProduct;
          return (
            <div className="container py-5">
            {/*title*/}
            <div className="row">
            <div className="col-10 mx-auto text-center text-slanted my-5">
              <h1>{title}</h1>
            </div>
            </div>
            
            {/*end title*/}
            {/*product info*/}
            <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} className="img-fluid" alt="product"/>
            </div>
            {/*product text*/}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h3>{title}</h3>
            <h4 className=" text-muted mt-3 mb-2"><span className="text-uppercase">
            {category}</span></h4>
            <h4 className="text-green">
            <strong>
              Price: <span>£</span>{price.toFixed(2)}
            </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">Product Details:</p>
            <p className="text-muted lead">{info}</p>
            {/*buttons*/}
            <div>
              <Link to='/products'>
              <ButtonContainer>
                Back to Products
              </ButtonContainer>
              </Link>
              <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
              }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>
            </div>
            </div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
