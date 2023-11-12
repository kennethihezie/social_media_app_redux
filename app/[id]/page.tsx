'use client'

import { ReduxState } from "@/lib/redux/store";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Page(){
    /**
     * using RTK Query for api calls
     * const { data: post, ,isFetching, isLoading, isSuccess, isError, error } = useGetPostQuery(postId)
     */
    const path = usePathname()
    const postId = path.replace('/', '')    
    const post = useSelector((state: ReduxState) => state.post.find(post => post.id === postId))

    if(!post) {
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    return (
        <section>
            <article>
                <h2>{ post.title }</h2>
                <p>{ post.content }</p>
            </article>
        </section>
    )
}