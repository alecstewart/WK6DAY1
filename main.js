import React from 'react'
import ReactDOM from 'react-dom'
import Headline from './Headline'
import Post from './Post'
// import TodoList from './TodoList'
// import Lifecycle from './Lifecycle'
// import LightSwitch from './LightSwitch'
// import Button from './Button'


ReactDOM.render(<div>
  <Post thumbnail="/facepic.jpg" text="1" date="2016-01-01"/>
  <Post thumbnail="/facepic.jpg" text="2" date="2016-01-02"/>
  <Post thumbnail="/facepic.jpg" text="3" date="2016-01-03"/>
  <Post thumbnail="/facepic.jpg" text="4" date="2016-01-04"/>
  <Post thumbnail="/facepic.jpg" text="5" date="2016-01-05"/>



  </div>, document.getElementById('app'))

// ReactDOM.render(<Post />, document.getElementById('app'))


// ReactDOM.render(<Lifecycle />, document.getElementById('app'))
// ReactDOM.render(<TodoList />, document.getElementById('app'))
// ReactDOM.render(<LightSwitch />, document.getElementById('app'))

// ReactDOM.render(<div>
//     <Button label="Yes" />
//     <Button label="No" />
//     <Button label="Maybe" />
//   </div>,
//    document.getElementById('app'))
