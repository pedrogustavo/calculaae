import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, subTitle }) => (
  <div className="field">
    <h1 className="title">{title}</h1>
    {subTitle && <h2 className="subtitle">{subTitle}</h2>}
  </div>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

export default Title
