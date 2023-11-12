'use client'

import { useSelector } from "react-redux"
import Post from "../post/post"
import { selectPosts } from "@/lib/redux/slices/selectors"


export const PostList = () => {
    const posts = useSelector(selectPosts)    
    
    const renderedList = posts.map(post => (<Post id={ post.id} title={ post.title } content={ post.content } />))

    return renderedList
}