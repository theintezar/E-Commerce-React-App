import React, { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 75,
      quantity: 2,
      image: 'https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png',
    },
    // Add more items as needed
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto my-8 p-4 mt-20" style={{width:"100vw", height:"100vh"}}>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  className="w-12 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="font-semibold">${item.price * item.quantity}</div>
            </div>
          ))}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Total:</p>
              </div>
              <div className="font-semibold">${getTotalPrice()}</div>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
