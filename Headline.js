import React from 'react'

var headerStyle = {
  display: 'inline-block',
  marginLeft: '3.0em',
  marginBottom: '1.0em',
  color: 'pink'
}

class Headline extends React.Component {
  render() {
    return <h1 style={headerStyle}><a href='#'>{this.props.text}</a></h1>
  }
}

export default Headline
