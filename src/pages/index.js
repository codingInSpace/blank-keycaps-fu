import React from 'react'
import ancientQuotes from '../data/quotes'
import divineLinks from '../data/imagelinks'
import finalThoughts from '../data/finalThoughts'
import './index.css'

//const bgImg = divineLinks[Math.floor(Math.random() * divineLinks.length)]
const bgImg = divineLinks[0]

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: '',
      footerText: ''
    }
  }

  componentWillMount() {
    this.setState({
      quote: ancientQuotes[Math.floor(Math.random() * ancientQuotes.length)],
      footerText: finalThoughts[Math.floor(Math.random() * finalThoughts.length)]
    })
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        quote: ancientQuotes[Math.floor(Math.random() * ancientQuotes.length)],
        footerText: finalThoughts[Math.floor(Math.random() * finalThoughts.length)]
      })
    }, 15000)
  }

  render() {
    return (

      <div>
        <div style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          borderBottom: '2px solid #522856',
          minHeight: '90vh'
        }}>
          <div style={{
            margin: '0 auto',
            maxWidth: 960,
            paddingTop: 70,
          }}>
            <div className="quotewrapper">
              <div className="quote">
                <p>{this.state.quote}.</p>
              </div>
            </div>

            <div className="imagewrapper">
              <img src="http://i.imgur.com/AQaoTpX.png" alt="keyboard layout"/>
            </div>
          </div>
        </div>

        <div className="footer" style={{minHeight: '10vh'}}>
          <p>{this.state.footerText} Be at peace and return wiser.</p><br/>
        </div>
      </div>
    )
  }
}

export default IndexPage
