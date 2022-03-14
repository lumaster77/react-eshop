import React from 'react';
import OrdenItem from '../components/OrderItem';
import Menu from '../components/Menu';
import '../styles/Checkout.scss';

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-cointainer">
                <h1 className="title">My order</h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>02.14.22</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                </div>
                <OrdenItem/>
            </div>
        </div>
    );
}

export default Checkout;