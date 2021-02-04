/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random descrition',
    author:'@reyes',
    data:['item 1', 'item 2'],
    person: {name: 'guillermo', age: 24}
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jtg5i5ubeb2s`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // accessToken: process.env.ACCESS_TOKEN,
        accessToken: `3Slfgk5QfD0DQEkOIaKmjIm5WxN5kzFR6qlbpST2CuM`
      },
    },
  ],
}
