import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const PRODUCTS = [
  { id:1, name:'Áo thun', price:200000, category:'Quần áo', description:'Áo cotton thoáng mát.' },
  { id:2, name:'Quần jeans', price:500000, category:'Quần áo', description:'Quần jeans bền đẹp.' },
  { id:3, name:'Giày sneaker', price:800000, category:'Giày', description:'Giày êm, phong cách.' },
  { id:4, name:'Mũ lưỡi trai', price:150000, category:'Phụ kiện', description:'Mũ thời trang.' },
];

export default function ProductDetail(){
  const { id } = useParams();
  const product = PRODUCTS.find(p=>p.id === Number(id));
  const { addToCart } = useCart();
  if(!product) return <p>Sản phẩm không tồn tại</p>;
  return (
    <div className="max-w-2xl bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-sm text-gray-600 mb-4">{product.category}</p>
      <p className="mb-4">{product.description}</p>
      <p className="font-bold mb-4">{product.price.toLocaleString()} VNĐ</p>
      <button onClick={()=>addToCart(product)} className="bg-green-600 text-white px-4 py-2 rounded">Thêm vào giỏ</button>
    </div>
  );
}
