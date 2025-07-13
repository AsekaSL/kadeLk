import React, { useState } from 'react';

const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    notes: '',
    createAccount: false,
  });

  const orderSummary = {
    items: [
      {
        name: 'Pineapple Macbook Pro 2022 M1 512GB',
        quantity: 3,
        price: 1746.50,
      },
    ],
    shipping: 'Free',
    extraShippingCost: 9.5,
    total: 1746.5,
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Details */}
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name *" className="input" onChange={handleInputChange} />
            <input name="lastName" placeholder="Last Name *" className="input" onChange={handleInputChange} />
          </div>
          <input name="company" placeholder="Company Name" className="input" onChange={handleInputChange} />
          <input name="country" placeholder="Country / Region *" className="input" onChange={handleInputChange} />
          <input name="street" placeholder="Street Address *" className="input" onChange={handleInputChange} />
          <input name="apartment" placeholder="Apartment, suite, etc." className="input" onChange={handleInputChange} />
          <input name="city" placeholder="Town / City *" className="input" onChange={handleInputChange} />
          <input name="state" placeholder="State / County *" className="input" onChange={handleInputChange} />
          <input name="zip" placeholder="Zip Code *" className="input" onChange={handleInputChange} />
          <input name="phone" placeholder="Phone *" className="input" onChange={handleInputChange} />
          <input name="email" placeholder="Email *" className="input" onChange={handleInputChange} />
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="createAccount" onChange={handleInputChange} />
            <span>Create an account?</span>
          </label>
          <textarea name="notes" placeholder="Additional Information (optional)" className="input h-20" onChange={handleInputChange}></textarea>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-semibold">Your Order</h2>
          <div className="border rounded-lg p-4 space-y-2">
            {orderSummary.items.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm text-gray-600">
              <span>Standard Shipping</span>
              <span>{orderSummary.shipping}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Additional Cost</span>
              <span>+${orderSummary.extraShippingCost.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${orderSummary.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-2">
            {['Direct Bank Transfer', 'Cash on Delivery', 'PayPal'].map((method, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="radio" name="paymentMethod" value={method} defaultChecked={index === 0} />
                <span>{method}</span>
              </label>
            ))}
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;