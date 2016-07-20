import React from 'react'
import ReactMixin from 'react-mixin'
import ReactLocalStorageMixin from 'react-localstorage'

class LikeButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      like:0
    }
  }

  render() {
    return <div>
      <button type="button" className="btn btn-block btn-sm" onClick={() => this.like()}>{this.state.likes} Likes</button>
    </div>
  }

  like() {
    this.setState({likes: this.state.likes + 1})
  }
}

ReactMixin.onClass(LikeButton, ReactLocalStorageMixin)

export defualt LikeButton
