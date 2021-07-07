/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Oleinikov.dev`,
    description: `My personal portfolio made with front-end framework Gatsby`,
    author: `Evgeniy Oleinikov`,
    keywords: `Portolio, Oleinikov.dev, Gatsby, Front-end`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          'script-src': `'self' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
          'frame-src': `'self' 'unsafe-inline' https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/`,
          'style-src': `'self' 'unsafe-inline'`,
          'img-src': `'self' data: https://www.gstatic.com`,
          'font-src': `'self' data: fonts.gstatic.com`,
          'connect-src': `${process.env.GATSBY_API_URL}`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
