import React from 'react'
import ancientQuotes from '../data/quotes'
import keeb from './hhkb.png'
import './index.css'

const IndexPage = () =>
  <div>
  <div className="quotewrapper">
    <div className="quote">
      <p>{ ancientQuotes[[Math.floor(Math.random() * ancientQuotes.length)]] }.</p>
    </div>
  </div>

    <div className="imagewrapper">
      <img src={keeb} alt="keyboard layout"/>
    </div>
  </div>

export default IndexPage
