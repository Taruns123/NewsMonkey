import PropTypes from 'prop-types'
import React, { Component } from 'react'
import loading from './loading.gif';

export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
        <div className="text-center">

      <img src={loading} alt='loading ...'></img>
        </div>
    )
  }
}

export default Spinner