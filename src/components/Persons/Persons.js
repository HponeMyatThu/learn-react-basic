import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerviedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillRecieveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, Snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(Snapshot);
  }

  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person) => {
      return (
        <Person
          click={() => this.props.clicked(person.id)}
          name={person.name}
          age={person.age}
          id={person.id}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
