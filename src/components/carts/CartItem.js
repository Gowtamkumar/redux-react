import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItems, increments, decrements } from '../../store1/features/cart/Cart';

export default function CartItem() {
  const { amount, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log("cartitem", cartItems);

  const handleCart = (value) => {
    console.log("dd", value)
  }
  const Increment = (id) => {
    dispatch(increments(id))
  }

  const decrement = (id) => {
    dispatch(decrements(id))
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
                  <h5 className="card-title">{singleCartItems.title}-{singleCartItems.amount}</h5>
                  <p className="card-text">{singleCartItems.description}</p>
                  <button className='btn btn-primary mr-4 btn-sm' onClick={() => Increment(singleCartItems.id)}>Add To Cart</button> &nbsp;
                  <button className='btn btn-primary btn-sm ml-4' onClick={() => removeCart(singleCartItems.id)}>Remove Item</button> <br />
                  <button onClick={() => Increment(singleCartItems.id)}>+</button>{singleCartItems.amount}<button
                    onClick={() => {
                      if (amount === 1) {
                        removeCart(singleCartItems.id)
                      }
                      decrement(singleCartItems.id)
                    }
                    }>-</button>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}
