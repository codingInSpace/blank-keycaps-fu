import React from 'react'
import ancientQuotes from '../data/quotes'
import keeb from './hhkb.png'
import divineLinks from '../data/imagelinks'
import finalThoughts from '../data/finalThoughts'
import './index.css'

const bgImg = divineLinks[Math.floor(Math.random() * divineLinks.length)]

const IndexPage = () =>
  <div>
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      borderBottom: '2px solid #522856'
    }}>
      <div style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: 70,
      }}>
        <div className="quotewrapper">
          <div className="quote">
            <p>{ ancientQuotes[Math.floor(Math.random() * ancientQuotes.length)] }.</p>
          </div>
        </div>

        <div className="imagewrapper">
          <img src={keeb} alt="keyboard layout"/>
        </div>
      </div>
    </div>

    <div className="footer">
      <p>{ finalThoughts[Math.floor(Math.random() * finalThoughts.length)] }</p>
    </div>
  </div>

export default IndexPage
