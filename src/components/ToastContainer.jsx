import React from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function ToastContainer(){ 
  const { toasts } = useCart();
  return (
    <div className="toast">
      {toasts.map(t => (
        <div key={t.id} className="mb-2 bg-black text-white px-4 py-2 rounded shadow">{t.message}</div>
      ))}
    </div>
  );
}
