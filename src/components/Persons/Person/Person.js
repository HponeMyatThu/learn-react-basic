import React, { Component} from 'react';

import classes from './Person.module.css';
import Auxilitary from '../../../hoc/Auxilitary';
import withClass from '../../../hoc/with_Class';

class Person extends Component {
  render() {
    console.log('[Person.js] render');
    return (
      <Auxilitary>
        <p key="i1" onClick={this.props.click}>
          Name: {this.props.name}, Age: {this.props.age} {this.props.id}
        </p>
        <input
          key="i2"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilitary>
    );
  }
}

export default withClass(Person, classes.Person);
