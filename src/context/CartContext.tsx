import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

const initialState =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('cart-product') as string)
    : null

export const CartContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState(initialState || [])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
