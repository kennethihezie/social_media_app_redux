/* Instruments */
import { apiSlice } from './slices/apiSlice/apiSlice'
import { postSlice } from './slices/postSlice/postSlice'

export const reducer = {
  post: postSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer
}
