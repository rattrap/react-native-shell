import React from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import * as Actions from '../actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todos extends React.Component {
  componentDidMount() {
      if(this.props.todos.length !== 0) {
          return;
      }
      this.props.fetchTodos();
  }
  render() {
      const { todos } = this.props;

      if(todos.length === 0) {
          return (
            <Content>
                <Text>No todos yet.</Text>
            </Content>
          );
      }

      const rows = todos.map((element, index) => {
        return (
            <ListItem key={index}>
                <Text>{element.title}</Text>
            </ListItem>
        );
      });
      return (
        <Content>
            <List>
                {rows}
            </List>
        </Content>
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