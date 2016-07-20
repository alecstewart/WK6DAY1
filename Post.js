import React from 'react'
import Headline from './Headline'

// import LikeButton from '.LikeButton'

class Post extends React.Component {
  render() {
    return <div>
      <Headline {...this.props} />
      <img src={this.props.thumbnail} />
      <h3>{this.props.date}</h3>
    </div>
  }
}

export default Post
