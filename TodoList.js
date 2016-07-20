import React from 'react'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoItems: ['beep', 'boop', 'bop']
    }
  }

render() {
  var todoItems = this.state.todoItems.map((todoItem, i) => {
    return <TodoItem key={i}>{todoItem}</TodoItem>
  })

  return <ul>
    {todoItems}
  </ul>
  }

}

var TodoItem = (props) => <li><TodoStatus /> {props.children} </li>

class TodoItem extends React.Component {
  render() {
    return <li><TodoStatus /> {this.props.children}</li>
  }
}

// var TodoStatus = React.createClass({
//   render: function() {
//     return <input type="checkbox" {...this.props} />
//   }
// })

export default TodoList
