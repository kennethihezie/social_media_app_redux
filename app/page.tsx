/* Components */
'use client'

import Button from "./components/button/button"
import { PostList } from "./components/posts/postList"
import { useRouter } from "next/navigation"


export default function Page() {
  const router = useRouter()


  return (
    <div className="flex flex-col space-y-6 mx-16">
      
      <div className="text-2xl font-bold text-center p-6">POSTS</div>

         <PostList />

        <Button text="New Post" onClick={() => router.push('/newPost')} />
      </div>
  )
}
