import { createSlice } from "@reduxjs/toolkit";

let cartData = JSON.parse(localStorage.getItem('cartData')) || []

let cartSlice = createSlice({
  name: "cart",
  initialState: cartData,
  reducers: {
    ADDTOCART: ((state, action) => {
      let product = action.payload
      let existingItem = state.find(item => item.id == product.id)

      if (existingItem) {
        existingItem.quantity += 1
      }
      else {
        state.push(product)
      }
      localStorage.setItem('cartData', JSON.stringify(state))
    }),
    DECRESER: ((state, action) => {
      let pro = action.payload
      let exi = state.find(item => item.id == pro.id)

      if (exi.quantity > 1) {
        exi.quantity -= 1
      }
      localStorage.setItem('cartData', JSON.stringify(state))
    }),

    REMOVEFROMCART: ((state, action) => {
      let product = action.payload
      let updateCart = state.filter(item => item.id !== product.id)
      localStorage.setItem('cartData', JSON.stringify(updateCart))
      return updateCart
    }),

    CLEARCART: ((state, action) => {
      localStorage.removeItem("cartData")
      return []
    })
  }
})

export const { ADDTOCART, REMOVEFROMCART, CLEARCART } = cartSlice.actions
export const { DECRESER } = cartSlice.actions
export default cartSlice.reducer