import ActionTypes from "./actionTypes";

class ChecksReducer {
  static reduce(state = [], action) {
    if (ChecksReducer[action.type]) {
      return ChecksReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_CHECKS](state, action) {
    return action.checks;
  }

  static [ActionTypes.OPEN_CHECK](state, action) {
    var { check } = action;
    state.push(check);
    return state;
  }

  static [ActionTypes.CLOSE_CHECK](state, action) {
    var { check } = action;
    delete check.orderedItems;
    const index = state.findIndex(a => a.id === check.id);
    state[index] = check;
    return state;
  }
}

export default ChecksReducer.reduce;
