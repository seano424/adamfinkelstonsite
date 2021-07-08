import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from '@/components/markdown-styles.module.css'
const serializers = {
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}
export default function Markup({ blockContent }) {
  return (
    <BlockContent
      blocks={blockContent}
      serializers={serializers}
      className={markdownStyles.markdown}
    />
  )
}
