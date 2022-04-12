import { Helmet } from "react-helmet"
import { gql, useQuery } from "@apollo/client"

const Blog = () => {
  const QUERY_GET_BLOGS = gql`
    query {
      blogs {
        data {
          id
          attributes {
            title
            description
          }
        }
      }
    }
  `
  const { loading, error, data } = useQuery(QUERY_GET_BLOGS)

  type TBlog = {
    attributes: {
      description: string
      title: string
    }
    id: string
  }

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <div className="App">
        <h1>Blog:</h1>

        {error && "Error:" + error.message}

        <ul>
          {loading && <li>Loading...</li>}

          {data &&
            data.blogs.data.map((post: TBlog) => (
              <li key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Blog
