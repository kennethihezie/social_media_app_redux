'use client'

import { selectPosts } from "@/lib/redux"
import { useSelector } from "react-redux"
import Post from "../post/post"


export const PostList = () => {
    const posts = useSelector(selectPosts)    
    
    const renderedList = posts.map(post => (<Post id={ post.id} title={ post.title } content={ post.content } />))

    return renderedList
}