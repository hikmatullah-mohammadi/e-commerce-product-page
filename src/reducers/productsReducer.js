import * as actionTypes from './../actions/types'
const initialState = [
  {
    id: "1",
    title: "Fall Limited Edition Sneakers",
    category: "women",
    type: "SNEAKER",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring"+
      "a durable rubber outer sole, they'll withstand everything the weahter can offer.",
    price: {
      original: "250.00",
      discount: "50%",
      current: "125.00"
    },
    images: {
      thumbnails: [
        './images/product-1/image-product-1-thumbnail.jpg',
        './images/product-1/image-product-2-thumbnail.jpg',
        './images/product-1/image-product-3-thumbnail.jpg',
        './images/product-1/image-product-4-thumbnail.jpg'
      ],
      main: [
        './images/product-1/image-product-1.jpg',
        './images/product-1/image-product-2.jpg',
        './images/product-1/image-product-3.jpg',
        './images/product-1/image-product-4.jpg'
      ]
    }
  }
]

const productsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.productsFetched:
      return state
    default:
      return state
  }
}


export default productsReducer