import * as actionTypes from './types'
import { createAction } from '@reduxjs/toolkit'
import products from './../productsData'

// the products json file should come from an api
export const fetchProducts = createAction(actionTypes.productsFetched, () =>({
  payload: { products }
}))

export const addToCart = createAction(actionTypes.addedToCart, (id, number) => ({
  payload: {id, number}
}))

export const removeFromCart = createAction(actionTypes.removedFromCart)

export const toggleLightbox = createAction(actionTypes.lightboxToggled, (id, defaultImage) => ({
  payload: { id, defaultImage }
}))
