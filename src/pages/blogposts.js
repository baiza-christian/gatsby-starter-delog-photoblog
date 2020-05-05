import React from 'react';
import Layout from "../components/layout";
import Helmet from 'react-helmet';
import PostLink from "../components/post-link"
import { graphql } from 'gatsby'

/**
* @author
* @function BlogpostsPage
**/

const BlogpostsPage = ({
    data: {
        site,
        allMarkdownRemark: { edges },
    },
  }) => {
  
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta name="description" content={site.siteMetadata.description} />
                {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
            </Helmet>
            <h1>Blog Posts </h1>
            <div className="grids">
                {Posts}
            </div>
        </Layout>
   )
 }

export default BlogpostsPage
export const pageQuery = graphql`
  query BlogpostsPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`