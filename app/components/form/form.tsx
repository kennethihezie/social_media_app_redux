import { SubmitHandler, useForm } from "react-hook-form"
import Input from "../input/input"
import { useDispatch } from "react-redux"
import { PostSliceState, postSlice } from "@/lib/redux"
import { nanoid } from "@reduxjs/toolkit"
import { useRouter } from "next/navigation"

export interface IFormInput {
    postTitle: string
    postContent: string
}

const Form = () => {
   /**
    * Using RTK Query for api calls
    * Mutation hooks return an array with two values:
    * The first value is a "trigger function". When called, it makes the request to 
    * the server, with whatever argument you provide. This is effectively like a thunk that 
    * has already been wrapped to immediately dispatch itself.
    * The second value is an object with metadata about the current in-progress request, if any. 
    * This includes an isLoading flag to indicate if a request is in-progress.
    * const [addNewPost, { isLoading }] = useAddNewPostMutation()
    * we call addNewPost with the initial post object. This returns a special Promise with a .unwrap()
    *  method, and we can await addNewPost().unwrap() to handle any potential errors with a standard
    *  try/catch block.
    */

    const router = useRouter()
    const dispatch = useDispatch()

    //Using react forms
    const { register, handleSubmit } = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
       /**
        * Post data with RTK Query
        * await addNewPost(data).unwrap()
        */

       const { postTitle, postContent } = data
      
       const post: PostSliceState = {
        id: nanoid(),
        title: postTitle,
        content: postContent
       }

       dispatch(postSlice.actions.postAdded(post))

      router.back()
    }
    

    return (
        <form onSubmit={ handleSubmit(onSubmit) }  className="space-y-4 flex flex-col">
            <Input label='postTitle' register={register} required />

            <Input label='postContent' register={register} required />
            <button type='submit' className="bg-purple-500 py-3 px-4 text-center text-white rounded-md font-semibold">Create Post</button>
        </form>
    )
}

export default Form