import { createContext, PropsWithChildren, useContext } from 'react'

type PostCardContext = {
  post: Post
}

type Post = {
  id: number
  title: string
  content: string
  user: {
    id: number
    name: string
  }
}

const PostCardContext = createContext<PostCardContext | undefined>(undefined)

function usePostCardContext() {
  const context = useContext(PostCardContext)
  if (!context) {
    throw new Error('usePostCardContext must be used within a PostCard')
  }
  return context
}

type PostCardProps = PropsWithChildren & {
  post: Post
}

export default function PostCard({ children, post }: PostCardProps) {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex h-full min-h-[150px] w-[300px] flex-col gap-2 bg-blue-400 p-2 rounded">{children}</div>
    </PostCardContext.Provider>
  )
}

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext()
  return <h2 className="text=lg font-semibold">{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
  const { post } = usePostCardContext()
  return <p>{post.content}</p>
}

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext()
  return <p className="text-sm text-right">By {post.user.name}</p>
}

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex flex-row gap-2 justify-end mt-auto">
      <button className="bg-gray-200 p-2 rounded">Read More</button>
      <button className="bg-gray-200 p-2 rounded">Comments</button>
    </div>
  )
}
