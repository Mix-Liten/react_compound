import { Children, isValidElement, createContext, PropsWithChildren, useContext, JSXElementConstructor } from 'react'

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
  const allowedChildren = Children.toArray(children).filter(child => {
    return (
      isValidElement(child) &&
      ['PostCard-Title', 'PostCard-Content', 'PostCard-User', 'PostCard-Buttons'].includes(
        (child.type as JSXElementConstructor<unknown> & { displayName: string }).displayName || '',
      )
    )
  })

  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex h-full min-h-[150px] w-[300px] flex-col gap-2 bg-blue-400 p-2 rounded">
        {allowedChildren}
      </div>
    </PostCardContext.Provider>
  )
}

const Title = () => {
  const { post } = usePostCardContext()
  return <h2 className="text=lg font-semibold">{post.title}</h2>
}
Title.displayName = 'PostCard-Title'

const Content = () => {
  const { post } = usePostCardContext()
  return <p>{post.content}</p>
}
Content.displayName = 'PostCard-Content'

const User = () => {
  const { post } = usePostCardContext()
  return <p className="text-sm text-right">By {post.user.name}</p>
}
User.displayName = 'PostCard-User'

const Buttons = () => {
  return (
    <div className="flex flex-row gap-2 justify-end mt-auto">
      <button className="bg-gray-200 p-2 rounded">Read More</button>
      <button className="bg-gray-200 p-2 rounded">Comments</button>
    </div>
  )
}
Buttons.displayName = 'PostCard-Buttons'

PostCard.Title = Title
PostCard.Content = Content
PostCard.User = User
PostCard.Buttons = Buttons
