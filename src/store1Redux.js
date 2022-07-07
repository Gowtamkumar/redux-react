import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { calculationTotal } from './store1/features/cart/Cart';


export default function Store1() {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculationTotal())
  }, [cartItems])

  return (
    <div>
      <h2>{total}</h2>
    </div>
  );
}
