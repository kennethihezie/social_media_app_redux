/* Instruments */
import { counterSlice } from './slices'
import { postSlice } from './slices/postSlice/postSlice'

export const reducer = {
  counter: counterSlice.reducer,
  post: postSlice.reducer
}
