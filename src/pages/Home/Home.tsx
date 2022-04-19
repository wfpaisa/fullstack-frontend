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
import { formatDateTimeLarge } from "@/utils/date"

const Home = () => {
  const { VITE_API } = import.meta.env
  const pageSize = 2

  const QUERY_GET_NEWS = gql`
    query News($page: Int!, $pageSize: Int!) {
      news(
        filters: { active: { eq: true } }
        sort: "createdAt:desc"
        pagination: { page: $page, pageSize: $pageSize }
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
      blogs: {
        data: {
          id: string
          attributes: {
            title: string
          }
        }
      }
    }
    id: string
  }

  const handlePaginate = (e: ChangeEvent<unknown>, page: number) => {
    getNews({ variables: { page, pageSize } })
  }

  // Create component
  useEffect(() => {
    getNews({ variables: { page: 1, pageSize } })
  }, [])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="App">
        <h1>Últimas noticias</h1>

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
                    <Typography
                      component="div"
                      variant="caption"
                      color="text.secondary"
                    >
                      {formatDateTimeLarge(post.attributes.publishedAt)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      component="div"
                      variant="body1"
                      color="text.primary"
                    >
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
                count={data.news.meta.pagination.pageCount}
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
