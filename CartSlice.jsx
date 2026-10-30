import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const plant = action.payload
            const existingItem = state.items.find((item) => item.id === plant.id)

            if (existingItem) {
                existingItem.quantity += 1
                return
            }

            state.items.push({ ...plant, quantity: 1 })
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter((item) => item.id !== itemId)
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.items.find((entry) => entry.id === id)

            if (!item) return

            if (typeof quantity !== 'number' || Number.isNaN(quantity) || quantity < 0) return

            if (quantity === 0) {
                state.items = state.items.filter((entry) => entry.id !== id)
                return
            }

            item.quantity = quantity
        },
        addToCart: (state, action) => {
            const plant = action.payload
            const existingItem = state.items.find((item) => item.id === plant.id)

            if (existingItem) {
                existingItem.quantity += 1
                return
            }

            state.items.push({ ...plant, quantity: 1 })
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((entry) => entry.id === action.payload)
            if (!item) return
            item.quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((entry) => entry.id === action.payload)
            if (!item) return

            if (item.quantity <= 1) {
                state.items = state.items.filter((entry) => entry.id !== action.payload)
                return
            }

            item.quantity -= 1
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const {
    addItem,
    removeItem,
    updateQuantity,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
