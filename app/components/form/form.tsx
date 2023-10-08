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
    const router = useRouter()
    //Using react forms
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
       const {postTitle, postContent } = data
       const post: PostSliceState = {
        id: nanoid(),
        title: postTitle,
        content: postContent
       }

       dispatch(postSlice.actions.postAdded(post))

      router.back()
    }
    const dispatch = useDispatch()
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4 flex flex-col">
            <Input label='postTitle' register={register} required />

            <Input label='postContent' register={register} required />
            <button type='submit' className="bg-purple-500 py-3 px-4 text-center text-white rounded-md font-semibold">Create Post</button>
        </form>
    )
}

export default Form