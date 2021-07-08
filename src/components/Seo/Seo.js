import React from 'react'
import { Helmet } from 'react-helmet'
import { useHelmetData } from './seo.queries'

export const Seo = ({ pageTitle, lang, meta }) => {
  const { title, keywords, author, description, image } = useHelmetData()
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle ? `${pageTitle} | ${title}` : `${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: pageTitle ? `${pageTitle} | ${title}` : `${title}`,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: pageTitle ? `${pageTitle} | ${title}` : `${title}`,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: image,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
}
