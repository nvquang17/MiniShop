import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + (i.qty||1), 0);
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to='/' className="text-xl font-bold text-blue-600">Q Shop</Link>
        <div className="space-x-4">
          <Link to="/cart" className="border px-3 py-1 rounded">🛒 Cart ({count})</Link>
        </div>
      </div>
    </nav>
  );
}
