import React, { useState, useEffect } from "react";
import { completeToDo } from "../actions";
import { connect } from "react-redux";

const ToDo = ({ id, text, completed, completeToDo }) => {
  const [checked, setChecked] = useState(false);

  const classSelector = () => {
    if (completed) {
      return 'completed'
    } else {
      return 'not-completed'
    }
  }

  const handleChange = () => {
    completeToDo({ id, text, completed})
  };

  return (
    <article className='not-completed'>
      <li className={classSelector()}>{text}</li> 
      <span>
        completed:
        <input
          type="checkbox"
          id={id}
          name={id}
          checked={completed}
          onChange={()=>handleChange()}
        />
      </span>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  completeToDo: toDo => dispatch(completeToDo(toDo)),
});

export default connect(null, mapDispatchToProps)(ToDo);
