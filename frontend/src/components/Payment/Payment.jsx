import React, { useState } from 'react';
import './payment.css';

const Payment= () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const handleOnChange = (e)=>{
        setPaymentMethod({
            ...paymentMethod,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
    }

    console.log(paymentMethod);
    return (

        <div className="payment">
            <form action='' onSubmit={handleOnSubmit}>
        <div className="payment-form-container">
            <h2 className='ph2'>Payment Methods</h2>
            <div className="payment-methods">
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked
                        onChange={handleOnChange}
                    />
                    Debit or Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked
                        onChange={handleOnChange}
                    />
                    PayPal
                </label>
            </div>
            
                <div className="p-card-details">
                    <div className="p-input-group">
                        <input type="text" name='first-name' id='firts-name' placeholder="First Name" onChange={handleOnChange}/>
                        <input type="text" name='last-name' placeholder="Last Name" onChange={handleOnChange} />
                    </div>
                    <div className="p-input-group">
                        <input type="text" name='c-number' placeholder="Credit Card Number" onChange={handleOnChange} />
                        <input type="text" name='cvc' placeholder="CVC" onChange={handleOnChange} />
                    </div>
                    <div className="p-input-group">
                        <input type="text" name='date' placeholder="MM / YY" onChange={handleOnChange}/>
                    </div>
                </div>

          
            <button className="p-submit-button">Submit Order</button>
        </div>
        </form>
        </div>
    );
};

export default Payment;
