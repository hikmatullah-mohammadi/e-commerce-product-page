import { createReducer } from '@reduxjs/toolkit'
import * as actionTypes from './../actions/types'

const initialState = {
  products: [],
  cart: {
    products: [
      // {id, title, thumbnail, number, price}
    ],
  },
  navigation: {
    isLightBoxOpen: false,
    isMenuOpen: false,
    lightboxId: -1,
    defaultImage: 0
  }
}

const productsReducer = createReducer(initialState, {
  [actionTypes.productsFetched]: (state, action) => {
    state.products = action.payload.products
  },
  [actionTypes.addedToCart]: (state, action) => {
    const indexInProducts = state.products.findIndex(item => item.id === action.payload.id)
    let product = state.products[indexInProducts]
    const {id, title, price} = product
    const indexInCartProducts = state.cart.products.findIndex(item => item.id === action.payload.id)
    // the product already exists in the cart
    if (indexInCartProducts > -1) {
      state.cart.products[indexInCartProducts].number = action.payload.number
    } else {
      state.cart.products.push({
        id,
        title,
        price,
        number: action.payload.number,
        thumbnail: product.images.thumbnails[0]
      })
    }
    
    // update products [number of product in cart]
    state.products[indexInProducts].numberInCart = action.payload.number
  },
  [actionTypes.removedFromCart]: (state, action) => {
    const index = state.cart.products.findIndex(item => item.id === action.payload.id)
    state.cart.products.pop(index)
    
    // update products [number of product in cart]
    const indexInProducts = state.products.findIndex(item => item.id === action.payload.id)
    state.products[indexInProducts].numberInCart = 0
  },
  [actionTypes.lightboxToggled]: (state, action) => {
  
    if (state.navigation.isLightBoxOpen) {
      state.navigation.isLightBoxOpen = false
    } else {
      state.navigation.isLightBoxOpen = true
      state.navigation.lightboxId = action.payload.id
      state.navigation.defaultImage = action.payload.defaultImage
    }
  }
})

export default productsReducer