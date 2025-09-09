import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const PRODUCTS = [
  { id:1, name:'Áo thun', price:200000, category:'Quần áo', image:'' },
  { id:2, name:'Quần jeans', price:500000, category:'Quần áo', image:'' },
  { id:3, name:'Giày sneaker', price:800000, category:'Giày', image:'' },
  { id:4, name:'Mũ lưỡi trai', price:150000, category:'Phụ kiện', image:'' },
];

export default function Home(){
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const { addToCart } = useCart();

  const categories = useMemo(()=>['All', ...new Set(PRODUCTS.map(p=>p.category))], []);
  const products = useMemo(()=>PRODUCTS.filter(p=> (cat==='All' || p.category===cat) && p.name.toLowerCase().includes(q.toLowerCase())), [q,cat]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tìm kiếm..." className="border p-2 rounded mr-2"/>
          <select value={cat} onChange={e=>setCat(e.target.value)} className="border p-2 rounded">
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p=>(
          <div key={p.id} className="border p-4 rounded bg-white shadow">
            <div className="h-40 bg-gray-100 flex items-center justify-center mb-3">Hình</div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.category}</p>
            <p className="font-bold mt-2">{p.price.toLocaleString()} VNĐ</p>
            <div className="mt-3 flex items-center justify-between">
              <button onClick={()=>addToCart(p)} className="bg-green-600 text-white px-3 py-1 rounded">Thêm</button>
              <Link to={`/product/${p.id}`} className="text-blue-600 underline">Chi tiết</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
