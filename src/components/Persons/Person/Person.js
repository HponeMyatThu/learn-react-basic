import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] render');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Name: {this.props.name}, Age: {this.props.age} {this.props.id}
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
