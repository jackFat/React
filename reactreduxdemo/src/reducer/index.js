// state, action
import { combineReducers } from 'redux'
const initState = {
  count: 0
}

const CountReducer = (state=initState, action) => {
  switch (action.type) {
    case 'add_action':
      return {
        count: state.count+1
      }
    case 'reduce_action':
      return {
        count: state.count-1
      }
  
    default:
      return state
  }
}

const InfoReducer = (state=0, action) => {
  console.log(action)
  return state
}

const ComReducer = combineReducers({
  CountReducer, 
  InfoReducer
})

export default ComReducer