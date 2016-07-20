import React from 'react'
import Bullet from './Bullet'

class Button extends React.Component {
  render() {
    return <div>
      <button type="button">{this.props.label}</button>
      <Bullet />
    <div>
  }
}

//make required
Button.propTypes = {label: React.PropTypes.string.isRequired}
Button.defaultProps = {label: 'Click Me'}

export default Button
