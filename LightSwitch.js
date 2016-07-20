import React from 'react'

var LightSwitch = React.createClass({
  getInitialState: function() {
    return {on: false, lightColor: 'gray'}
  },
  render: function() {
    var lightColor = {color: this.state.lightColor}

    return <div>
      <input type="checkbox" onChange={this.flipSwitch} />
      <span style={lightColor}>{this.state.on ? ' ON' : ' OFF'}</span>
    </div>
  },
  flipSwitch: function(e) {
    this.setState({on: e.target.checked, lightColor: e.target.checked ? 'lightgreen' : 'gray'})
  }
})

export default LightSwitch
