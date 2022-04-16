import { Helmet } from "react-helmet"
import { gql, useLazyQuery } from "@apollo/client"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Pagination from "@mui/material/Pagination"
import ReactMarkdown from "react-markdown"
import { ChangeEvent } from "react"
import { useEffect } from "react"

const Home = () => {
  const { VITE_API } = import.meta.env

  const QUERY_GET_NEWS = gql`
    query News($page: Int!) {
      news(
        filters: { active: { eq: true } }
        pagination: { page: $page, pageSize: 1 }
      ) {
        data {
          attributes {
            title
            description
            publishedAt
          }
          id
        }
        meta {
          pagination {
            total
            page
            pageCount
            pageSize
          }
        }
      }
    }
  `

  const [getNews, { loading, error, data }] = useLazyQuery(QUERY_GET_NEWS)

  type TBlog = {
    attributes: {
      title: string
      publishedAt: string
      description: string
    }
    id: string
  }

  const handlePaginate = (e: ChangeEvent<unknown>, p: number) => {
    getNews({ variables: { page: p } })
  }

  // Create component
  useEffect(() => {
    getNews({ variables: { page: 1 } })
  }, [])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="App">
        <h1>Hola...</h1>

        {error && "Error:" + error.message}

        <Grid container spacing={2} justifyContent="center">
          {loading && <Grid item>Loading...</Grid>}

          {data &&
            data.news.data.map((post: TBlog) => (
              <Grid item key={post.id} xs={12}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardContent>
                    {/* Title */}
                    <Typography gutterBottom variant="h5" component="div">
                      {post.attributes.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      component="div"
                      variant="body2"
                      color="text.secondary"
                    >
                      <small>{post.attributes.publishedAt}</small>

                      <ReactMarkdown
                        transformImageUri={(uri) => `${VITE_API}${uri}`}
                      >
                        {post.attributes.description}
                      </ReactMarkdown>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          {data && (
            <Grid item>
              <Pagination
                // count={20}
                count={data.news.meta.pagination.total}
                page={data.news.meta.pagination.page}
                onChange={handlePaginate}
                siblingCount={1}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </>
  )
}

export default Home
