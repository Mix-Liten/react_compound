type Post = {
  id: number
  title: string
  content: string
  user: {
    id: number
    name: string
  }
}

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex w-[300px] flex-col gap-2 bg-blue-400 p-2 rounded">
      <h2 className="text=lg font-semibold">{post.title}</h2>
      <p>{post.content}</p>
      <p className="text-sm text-right">By {post.user.name}</p>

      <div className="flex flex-row gap-2 justify-end">
        <button className="bg-gray-200 p-2 rounded">Read More</button>
        <button className="bg-gray-200 p-2 rounded">Comments</button>
      </div>
    </div>
  )
}
