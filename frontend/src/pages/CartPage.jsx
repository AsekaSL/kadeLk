import React from 'react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: 579,
      discount: 199,
      shipping: 'Free Shipping',
      stock: true,
      image: '/images/srok-phone.png',
    },
    {
      id: 2,
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: 979,
      discount: 0,
      shipping: '$2.98 Shipping',
      stock: true,
      image: '/images/apod-tablet.png',
    },
    {
      id: 3,
      name: 'Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone',
      price: 659,
      discount: 0,
      shipping: 'Free Shipping',
      stock: true,
      image: '/images/galaxy-x6.png',
    },
  ];

  const summary = {
    subtotal: 1000,
    shipping: 600,
    tax: 137,
    total: 1737,
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white shadow p-6 rounded-lg flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">
                  Price: <span className="text-black font-semibold">${item.price}</span>
                  {item.discount > 0 && (
                    <span className="ml-2 text-green-500">Save ${item.discount}</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{item.shipping}</p>
                <p className={`text-sm ${item.stock ? 'text-green-600' : 'text-red-600'}`}>
                  {item.stock ? 'In stock' : 'Out of stock'}
                </p>
              </div>
              <input type="number" defaultValue={1} className="w-16 border rounded px-2 py-1" />
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>${summary.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span>${summary.shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>${summary.tax}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${summary.total}</span>
            </div>
            <button className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;