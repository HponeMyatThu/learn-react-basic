import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Auxilitary from '../../../hoc/Auxilitary';
import withClass from '../../../hoc/with_Class';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount');
    console.log(this.context.authenticated);
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  static contextType = AuthContext;

  render() {
    console.log('[Person.js] render');
    return (
      <Auxilitary>
          {
           this.context.authenticated ? <p>Is auth true</p> : <p>Is auth false</p>
          }
        <p key="i1" onClick={this.props.click}>
          Name: {this.props.name}, Age: {this.props.age} {this.props.id}
        </p>
        <input
          key="i2"
          type="text"
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilitary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
