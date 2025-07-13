import React, { useState } from 'react';

const ProductProfile = () => {
  const [selectedColor, setSelectedColor] = useState('Midnight Blue');
  const [selectedMemory, setSelectedMemory] = useState('128GB');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone',
    sku: 'ABC025168',
    brand: 'sumsong',
    category: 'Cell Phones & Tablets',
    price: 609,
    promoPrice: 569,
    colors: ['Midnight Blue', 'Deep Purple', 'Space Black'],
    memories: ['64GB', '128GB', '256GB', '512GB'],
    description: `Supports Intel LGA 1700 Socket: 13th & 12th Gen Intel Core,
      DDR5 Compatible: 4*SMD DIMMs with XMP 3.0,
      Twin 16+1+2 Phases Digital VRM for power stability.`,
    shippingInfo: 'Free Shipping • Ships from United States',
    warranty: 'Guaranteed Safe Checkout',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-lg shadow p-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src="/images/somseng-phone.png"
            alt={product.name}
            className="rounded-lg w-full max-w-sm object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="text-gray-600 text-sm">
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 whitespace-pre-line">{product.description}</p>

          {/* Color Selector */}
          <div>
            <p className="font-semibold mb-2">Color:</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded border ${selectedColor === color ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Memory Selector */}
          <div>
            <p className="font-semibold mb-2">Memory Size:</p>
            <div className="flex gap-2">
              {product.memories.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedMemory(size)}
                  className={`px-3 py-1 rounded border ${selectedMemory === size ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="text-xl font-bold text-green-600">
            ${product.promoPrice.toFixed(2)}{' '}
            <span className="text-gray-500 line-through text-base ml-2">${product.price.toFixed(2)}</span>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-2">
            <label htmlFor="qty">Qty:</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 border rounded px-2 py-1"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">Add to Cart</button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Buy with PayPal</button>
            <button className="border px-6 py-2 rounded text-gray-600 hover:text-black">Add to Wishlist</button>
          </div>

          {/* Shipping & Warranty */}
          <p className="text-sm text-gray-600 mt-4">{product.shippingInfo}</p>
          <p className="text-sm text-gray-600">{product.warranty}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;