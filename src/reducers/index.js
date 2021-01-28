import {combineReducers} from 'redux'
import {toDos} from './toDos'
import {category} from './categories'

const rootReducer = combineReducers({
  toDos,
  category
});
 
export default rootReducer;