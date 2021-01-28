const example1 = {id: 1234, text: 'action.toDo', completed: false}
const example2 = {id: 3333, text: 'poop', completed: false}

export const toDos = (state = [example1, example2], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newToDo = {id: Date.now(), text: action.toDo, completed: false}
      return [...state, newToDo];
    case 'COMPLETE_TODO':
      const otherToDos = state.filter(todo => todo.id !== action.toDo.id)
      const updatedStatus = !action.toDo.completed 
      console.log(otherToDos)
      return [...otherToDos, {...action.toDo, completed: updatedStatus}]
      
    default:
      return state;
  }
}