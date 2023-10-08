'use client'

import Button from "../components/button/button";
import Form from "../components/form/form";

export default function Page(){
    return (
        <div className="flex flex-col space-y-6 mx-16">
      
        <div className="text-2xl font-bold text-center p-6">NEW POSTS</div>

        <Form />
    
       </div>
    )
}