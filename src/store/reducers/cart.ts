import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../pages/Categories'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const itemMenu = state.items.find((item) => item.id === action.payload.id)

      if (!itemMenu) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = [] // Limpa todos os itens do carrinho
    }
  }
})

export const { add, open, close, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer
