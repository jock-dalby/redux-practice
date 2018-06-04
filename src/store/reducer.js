import * as actions from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actions.ADD_PERSON:
    return {
      ...state,
      persons: state.persons.concat(getPerson())
    }
    case actions.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.id)
      }
    default:
      return state;
  }
}

export default reducer;

function getPerson() {
  return {
    id: Math.random(), // not really unique but good enough here!
    name: 'Max',
    age: Math.floor( Math.random() * 40 )
  }
}
