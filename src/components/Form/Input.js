import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ id, textLabel, type, placeHolder }) => (
  <div className="field">
    {textLabel && <label className="label" htmlFor={id}>{textLabel}</label>}
    <p className="control">
      <input className="input" type={type} id={id} placeholder={placeHolder} />
    </p>
  </div>
)

Input.defaultProps = {
  type: 'text',
  placeHolder: ''
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  textLabel: PropTypes.string,
  type: PropTypes.oneOf(['number', 'text']),
  placeHolder: PropTypes.string
}

export default Input
