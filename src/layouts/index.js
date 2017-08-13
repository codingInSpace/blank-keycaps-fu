import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import divineLinks from '../data/imagelinks'

import './index.css'

const bgImg = divineLinks[Math.floor(Math.random() * divineLinks.length)]

const Header = () =>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover'
  }}>
    <Helmet
      title="YOU CAN DO IT"
      meta={[
        { name: 'description', content: 'Dont let your caps be dreams' },
        { name: 'keywords', content: 'keycaps, good, nice' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 70,
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
