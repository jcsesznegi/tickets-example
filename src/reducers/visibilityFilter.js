import * as types from '../constants/ActionTypes/index';

const visibilityFilter = (state = 'SHOW_ACTIVE', action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
