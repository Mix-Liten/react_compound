import Layout from './Layout'
import PostCard from './PostCard'

const samplePost = {
  id: 1,
  title: 'Hello, World!',
  content: 'This is the first post on our new blog.',
  user: {
    id: 1,
    name: 'John Doe',
  },
}

function App() {
  return (
    <Layout>
      <h1 className="w-full text-center text-2xl font-bold dark:text-white mt-5 items-start">
        Welcome to React Compound design pattern!
      </h1>
      <div className="w-full flex flex-grow justify-center items-center gap-5">
        <PostCard post={samplePost}>
          <PostCard.Title />
          <PostCard.Content />
          <PostCard.User />
          <PostCard.Buttons />
        </PostCard>
        <PostCard post={samplePost}>
          <PostCard.Title />
          <PostCard.Content />
        </PostCard>
        <PostCard post={samplePost}>
          <PostCard.Title />
          <PostCard.Buttons />
          <p>test</p>
        </PostCard>
      </div>
    </Layout>
  )
}

export default App
