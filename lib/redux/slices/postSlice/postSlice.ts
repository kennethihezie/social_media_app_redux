import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface PostSliceState {
    id: string
    title: string
    content: string
}

const initialState: Array<PostSliceState> = [
  {
    id: '1',
    title: 'First Post',
    content: 'Hello'
  },

  {
    id: '2',
    title: 'Second Post',
    content: 'More text'
  }
]

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded: (state, action: PayloadAction<PostSliceState>) => {
           state.push(action.payload)
        }
    }
})