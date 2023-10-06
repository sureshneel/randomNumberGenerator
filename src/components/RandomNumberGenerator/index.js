// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {ramNumber: '0'}

  genRandomNumber = () => {
    const numberRandom = Math.floor(Math.random() * 100)

    this.setState({ramNumber: numberRandom})
  }

  render() {
    const {ramNumber} = this.state
    return (
      <div className="ram-container">
        <div className="inner-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.genRandomNumber}>
            Generate
          </button>
          <p className="random-number">{ramNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
