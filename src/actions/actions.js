import * as actionTypes from './types'
import { createAction } from '@reduxjs/toolkit'


export const fetchProducts = createAction(actionTypes.productsFetched)

export const addToCart = createAction(actionTypes.addedToCart, (id, number) => ({
  payload: {id, number}
}))

export const removeFromCart = createAction(actionTypes.removedFromCart)

export const toggleLightbox = createAction(actionTypes.lightboxToggled, (id, defaultImage) => ({
  payload: { id, defaultImage }
}))
