import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../Error/ErrorBoundary';
import Cockpit from '../components/Persons/Cockpit/Cockpit';
import classes from './App.module.css';

class App extends Component {
  constructor(props){
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
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return props
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWill');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
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
    this.setState({ persons });
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
      <div className={classes.Cockpit}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
