import Layout from './Layout'
import PostCard from './PostCard'

function App() {
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold dark:text-white mt-5">Welcome to React Compound design pattern!</h1>
      <div className="m-5 flex justify-center">
        <PostCard
          post={{
            id: 1,
            title: 'Hello, World!',
            content: 'This is the first post on our new blog.',
            user: {
              id: 1,
              name: 'John Doe',
            },
          }}
        />
      </div>
    </Layout>
  )
}

export default App
