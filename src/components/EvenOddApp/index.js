/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'

import './index.css'

// eslint-disable-next-line no-unused-vars
class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
    console.log(randomNumber)
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {displayText}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="desc">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
