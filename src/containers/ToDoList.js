import React, { useState, useEffect } from "react";
import ToDo from "../components/Todo";
import { selectCategory } from '../actions/index';
import { connect } from "react-redux";

const ToDoList = ({ toDos, category, selectCategory }) => {
  
  const getFilteredToDos = (toDoList) => {
    const filteredToDos = toDoList.filter(td => {
      if (category === 'complete') {
        return td.completed
      } else if (category === 'incomplete') {
        return !td.completed
      } else {
        return td
      }
    })
    return filteredToDos
  }

  const displayToDos = getFilteredToDos(toDos).map(toDo => {
    return <ToDo {...toDo} key={toDo.id} />;
  });

  const classSelector = (category, id) => {
    if (category === id) {
      return 'selected'
    } else {
      return 'not-selected'
    }
  }

  return (
    <section>
      <div>
        <ul className='categories'>
          <li className={classSelector(category, 'incomplete')} title='incomplete' onClick={(e) => selectCategory(e.target.title)}>Incomplete</li>
          <li className={classSelector(category, 'complete')} title='complete' onClick={(e) => selectCategory(e.target.title)}>Complete</li>
          <li className={classSelector(category, 'all')} title='all' onClick={(e) => selectCategory(e.target.title)}>All</li>
        </ul>
      </div>
      <ul className='list-display'>{displayToDos}</ul>
    </section>
  );
};

const mapStateToProps = state => ({
  toDos: state.toDos,
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch( selectCategory(category) )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
