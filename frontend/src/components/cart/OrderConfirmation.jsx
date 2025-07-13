import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {


    const order = {
        orderId: "ORD12345678",
        total: 135000,
        items: [
            {
            title: "Headphones",
            price: 120000,
            quantity: 1
            },
            {
            title: "Gaming Mouse",
            price: 7500,
            quantity: 2
            }
        ],
        shipping: {
            fullName: "Saranga Samarkoon",
            address: "218/4/1, Warahanthuduwa, Mahara, Kadawatha",
            city: "Colombo",
            zip: "11850",
            phone: "0763361385"
        }
    };

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <div className="text-center">
          <svg
            className="mx-auto mb-4 w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>

          <h2 className="text-2xl font-bold text-gray-800">Thank you for your order!</h2>
          <p className="text-sm text-gray-600 mt-2">
            Your order <span className="font-semibold text-black">#{order.orderId}</span> has been placed successfully.
          </p>
        </div>

        {/* Order Summary */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
          <ul className="space-y-2">
            {order.items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between border-b pb-2 text-sm text-gray-700"
              >
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>Rs.{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between font-bold text-gray-800">
            <span>Total:</span>
            <span>Rs.{order.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <div className="text-sm text-gray-700">
            <p>{order.shipping.fullName}</p>
            <p>{order.shipping.address}</p>
            <p>{order.shipping.city}, {order.shipping.zip}</p>
            <p>{order.shipping.phone}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;