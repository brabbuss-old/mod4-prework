export const addToDo = toDo => ({
  type: 'ADD_TODO',
  toDo
});

export const completeToDo = toDo => ({
  type: 'COMPLETE_TODO',
  toDo
});

export const selectCategory = category => ({
  type: 'SELECT_CATEGORY',
  category
});