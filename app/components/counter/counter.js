import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './counter.css';

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicks: 0
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    let clicks = this.state.clicks
    clicks++;
    this.setState({
      clicks: clicks
    })
  }

  decrement() {
    let clicks = this.state.clicks
    clicks--;
    this.setState({
      clicks: clicks
    })
  }

  render() {
    return (
      <div>
        <div className="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className="counter">
          {this.state.clicks}
        </div>
        <div className="btnGroup">
          <button className="btn" onClick={this.increment}>
            <i className="fa fa-plus" />
          </button>
          <button className="btn" onClick={this.decrement}>
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}
