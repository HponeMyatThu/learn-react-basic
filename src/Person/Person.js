import React from "react";

import classes from './Person.module.css'

const person = (props) => {
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>Name: {props.name}, Age: {props.age} {props.index}</p>
             <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;