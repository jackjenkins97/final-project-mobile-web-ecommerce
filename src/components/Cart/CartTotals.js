import React from 'react';
import {Link} from 'react-router-dom';
export default function CartTotals({value}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (<React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-md-auto col-sm-8 text-capitilized text-right">
                <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                        Clear Cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">
                    sub total:</span>
                    <strong>£ {cartSubTotal.toFixed(2)}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                    tax:</span>
                    <strong>£ {cartTax.toFixed(2)}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                    total:</span>
                    <strong>£ {cartTotal.toFixed(2)}</strong>
                </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}