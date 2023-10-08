import { PostSliceState } from "@/lib/redux";


const Post = ({id, title, content}: PostSliceState) => {
  return (
    <div className="border border-grey-300 rounded-md py-2 px-4 flex flex-col" key={ id }>
       <div className="text-lg font-semibold">{ title }</div>
       <div className="text-md">{ content }</div>
    </div>
  )
}

export default Post