import React from 'react'
import { useSelector } from 'react-redux';
import '../../App.css';

export default function Navbar() {
  const { totalqty } = useSelector(state => state.cart);
  return (
    <nav className='nav-center'>
      <div>
        <h2>Redux toolkit</h2>
      </div>
      <div>
        <h2>Total Qty: {totalqty}</h2>
      </div>
    </nav>
  )
}
