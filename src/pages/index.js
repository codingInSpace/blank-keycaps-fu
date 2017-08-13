import React from 'react'
import ancientQuotes from '../data/quotes'
import './index.css'

const IndexPage = () =>
  <div className="quotewrapper">
    <div className="quote">
      <p>{ ancientQuotes[[Math.floor(Math.random() * ancientQuotes.length)]] }.</p>
      <div></div>
    </div>
  </div>

export default IndexPage
