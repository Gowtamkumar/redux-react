import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Store1Redux() {
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{amount}</h2>
    </div>
  );
}
