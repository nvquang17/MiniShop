import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function Checkout(){
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addr, setAddr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cart.length===0){ alert('Giỏ hàng trống'); return; }
    alert('Thanh toán thành công — ' + name);
    clearCart();
  };

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Thanh toán</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input required className="w-full border p-2 rounded" placeholder="Họ tên" value={name} onChange={e=>setName(e.target.value)}/>
        <input required className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input required className="w-full border p-2 rounded" placeholder="Địa chỉ" value={addr} onChange={e=>setAddr(e.target.value)}/>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Xác nhận</button>
      </form>
    </div>
  );
}
