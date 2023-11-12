'use client'

import { useSelector } from "react-redux"
import Post from "../post/post"
import { selectPosts } from "@/lib/redux/slices/selectors"
import Link from "next/link"


export const PostList = () => {
   /**
    * Using the RTK exported hook
    * const { data: posts, isFetching, isLoading, isSuccess, isError, error } = useGetPostsQuery()
    *   
    * let content
    * 
    *  if (isLoading) {
    *    content = <Spinner text="Loading..." />
    * } else if (isSuccess) {
    *    content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
    * } else if (isError) {
    *    content = <div>{error.toString()}</div>
    *  }
    * 
    * return (
    *   <section className="posts-list">
    *    <h2>Posts</h2>
    *     {content}
    *  </section>
    * )
    */

    const posts = useSelector(selectPosts)    
    
    const renderedList = posts.map(post => ( <Link href={`/${post.id}`}><Post id={ post.id} title={ post.title } content={ post.content } /></Link>))

    return renderedList
}