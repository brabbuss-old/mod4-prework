import React, { Component } from 'react'
import { addToDo } from '../actions';
import {connect} from 'react-redux'

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { toDo: '' };
  }

  handleChange = (e) => {
    this.setState({ toDo: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.addToDo(this.state.toDo)
    this.setState({ toDo: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.toDo}
            placeholder="Add A ToDo"
            onChange={this.handleChange} />
          <button>Add ToDo</button>
        </form>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: toDo => dispatch( addToDo(toDo) )
})

export default connect(null, mapDispatchToProps)(AddToDoForm);
