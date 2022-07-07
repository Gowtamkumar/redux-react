import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, handleReset, handleSubmit } from '../../store1/features/cart/Cart';

export default function From() {
  const { data, sendData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChangeFrom = ({ target }) => {
    const newData = { ...data }
    newData[target.name] = target.value
    dispatch(handleChange(newData))
  }


  const handleSubmits = (event) => {
    dispatch(handleSubmit())
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input type="text" name='fName' onChange={handleChangeFrom} /><br />
        <input type="text" name='lName' onChange={handleChangeFrom} /><br />
        <input type="text" name='phone' onChange={handleChangeFrom} /><br />
        <input type="submit" title='Submit' onClick={(event) => handleSubmits(event)} />
        <input type="reset" title='React' onClick={() => dispatch(handleReset())} />
      </form>
    </div>
  )
}
