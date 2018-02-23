import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
