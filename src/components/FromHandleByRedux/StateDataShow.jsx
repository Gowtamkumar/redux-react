import React from 'react'
import { useSelector } from 'react-redux'

export default function StateDataShow() {
  const { sendData } = useSelector((state) => state.cart);
  console.log("dfsdafasdf", sendData);
  return (
    <div>
      <ul>
        <li>{sendData.fName}</li>
        <li>{sendData.lName}</li>
        <li>{sendData.phone}</li>
      </ul>
    </div>
  )
}
