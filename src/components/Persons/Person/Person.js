import React, { Component} from 'react';

import classes from './Person.module.css';
import Auxilitary from '../../../hoc/Auxilitary';
import withClass from '../../../hoc/with_Class';

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    console.log('[Person.js] componentDidMount');
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
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
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilitary>
    );
  }
}

export default withClass(Person, classes.Person);
