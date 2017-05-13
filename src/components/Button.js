import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, handleClick }) => (
  <div className="field">
    <p className="control">
      <button className="button is-primary" onClick={handleClick}>{text}</button>
    </p>
  </div>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button
