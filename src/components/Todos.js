import React from 'react';
import { Button } from 'react-native';
import * as Actions from '../actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todos extends React.Component {
  render() {
    let title = "Fetch (" + this.props.todos.length + ")";
    return (
        <Button
            title={title}
            onPress={this.props.fetchTodos}
        />
    );
  }
}

function mapStateToProps(state, props) {
    return {
        todos: state.todoReducer.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);