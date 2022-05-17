import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItems } from '../../store1/features/cart/Cart';

export default function CartItem() {
  const { amount, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log("cartitem", cartItems);
  const handleCart = (value) => {
    console.log("dd", value)
  }
  const increment = () => {

  }

  const removeCart = (id) => {
    dispatch(removeItems(id))
  }

  return (
    <div className='row'>
      {
        cartItems.map((singleCartItems, index) => {
          return (
            <div className='col-md-3' key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={singleCartItems.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{singleCartItems.title}</h5>
                  <p className="card-text">{singleCartItems.description}</p>
                  <button className='btn btn-primary mr-4' onClick={() => handleCart(singleCartItems)}>Add To Cart</button>
                  <button className='btn btn-primary' onClick={() => removeCart(singleCartItems.id)}>Remove Item</button>
                  <button onClick={() => increment()}>+</button>{amount}<button>-</button>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
