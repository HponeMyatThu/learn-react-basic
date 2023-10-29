import classes from './App.module.css';
import React, { useState } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  const [state, setStatus] = useState({
    persons: [
      { id: '1', name: 'hpone', age: 22 },
      { id: '2', name: 'manu', age: 28 },
      { id: '3', name: 'sofia', age: 26 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  });

  const togglePersonHandler = () => {
    setStatus({ ...state, showPersons: !state.showPersons });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...state.persons];
    persons.splice(personIndex, 1);
    setStatus({ ...state, persons: persons });
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = state.persons.findIndex((p) => p.userId === id);
    const person = { ...state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...state.persons];
    persons[personIndex] = person;
    setStatus({ ...state, persons: persons });
  };

  let persons = null;
  let btnClass = '';
  if (state.showPersons) {
    persons = (
      <div>
        {state.persons.map((person) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                click={() => deletePersonHandler(person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
                index={person.id}
                changed={(event) => nameChangeHandler(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    );
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (state.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (state.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1 className={assignedClasses.join(' ')}>Hello World</h1>
      <button className={btnClass} onClick={togglePersonHandler}>
        Toggle Person
      </button>
      {persons}
    </div>
  );
}

export default App;
