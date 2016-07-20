import React from 'react'
import ReactDOM from 'react-dom'

class Lifecycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0, node: props.node}
    this.count = this.count.bind(this)
  }
  count() {
    if (this.state.counter < 100000000000000000000000000000000000000) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
    else {
      ReactDOM.unmountComponentAtNode(document.getElementById(this.state.node))
    }
  }
  componentDidMount() {
    console.log('Lifecycle mounted')
    this.updateCount = setInterval(this.count, 1000)
  }
  componentWillUnmount() {
    // Clean up potential memory leak
    console.log('<Counter /> has left the house.')
    clearInterval(this.updateCount)
  }
  render() {
    return (
      <h1>{this.state.counter}</h1>
    )
  }
}

export default Lifecycle
