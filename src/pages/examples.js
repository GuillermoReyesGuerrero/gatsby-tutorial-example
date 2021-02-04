import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
    const {site:{
        info: {author}
    }} = data
    return (
        <Layout>
            <div>
                <h1>hello from examples</h1>
                <Header />
                <HeaderStatic />
                <h5>author: {author}</h5>
            </div>
        </Layout>
    )
}

export const data = graphql`
{
    site{
      info: siteMetadata{
        title
        description
        author
        data
        person{
          name
          age
        }
      }
    }
  }
`

export default examples
