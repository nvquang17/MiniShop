import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Cart(){
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((s,i)=> s + (i.price*(i.qty||1)), 0);
  if(cart.length===0) return <p>Giỏ hàng trống. <Link to='/'>Quay về</Link></p>;
  return (
    <div className="bg-white p-4 rounded shadow max-w-2xl">
      {cart.map(item=> (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-500">Số lượng: {item.qty||1}</div>
          </div>
          <div className="text-right">
            <div>{(item.price).toLocaleString()} VNĐ</div>
            <button className="text-red-500 mt-2" onClick={()=>removeFromCart(item.id)}>Xóa</button>
          </div>
        </div>
      ))}
      <div className="mt-4 font-bold">Tổng: {total.toLocaleString()} VNĐ</div>
      <div className="mt-4 flex gap-2">
        <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded">Thanh toán</Link>
        <button onClick={clearCart} className="border px-4 py-2 rounded">Xóa giỏ</button>
      </div>
    </div>
  );
}
