import React from "react"
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import HeaderPhoto from "../images/Portra400.jpg"

const IndexPage =  ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
      </Helmet>
      <Link to='/blogposts' className="button -primary">Blog posts</Link>
      <HeroHeader/>
      <img src={HeaderPhoto} alt="First pic" />
    </Layout>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery{
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
  }
  `