import React, { useContext } from 'react'
import OrderItem from '@components/OrderItem'
import '@styles/MyOrder.scss'
import flechaIcon from '@icons/flechita.svg'
import AppContext from '@context/AppContext'

const MyOrder = () => {
  const { state, toggleOrderView } = useContext(AppContext)

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={flechaIcon} alt='arrow' onClick={toggleOrderView} />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className='order'>
          <p>
            <span>Total</span>
            <span>${state.cart.reduce((x, y) => x + y.price, 0)}</span>
          </p>
          <p></p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  )
}

export default MyOrder
