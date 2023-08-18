// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="main-container">
        <div className="text">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="Enter">Enter the phrase</label>
          <br />
          <input
            id="Enter"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onInput}
            className="input"
          />
          <div className="p">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
