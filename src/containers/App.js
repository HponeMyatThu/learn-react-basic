import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../Error/ErrorBoundary';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import classes from './App.module.css';
import withClass from '../hoc/with_Class';
import Auxilitary from '../hoc/Auxilitary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'hpone', age: 22 },
      { id: '2', name: 'manu', age: 28 },
      { id: '3', name: 'sofia', age: 26 },
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return props;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWill');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  togglePersonHandler = () => {
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons,
    }));
  };

  deletePersonHandler = (personId) => {
    this.setState((prevState) => ({
      persons: prevState.persons.filter((person) => person.id !== personId),
    }));
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1,
      };
    });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Auxilitary classes={classes.Cockpit}>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          />
        ) : null}
        {persons}
      </Auxilitary>
    );
  }
}

export default withClass(App, classes.Cockpit);
