import ActionTypes from "./actionTypes";

class TablesReducer {
  static reduce(state = [], action) {
    if (TablesReducer[action.type]) {
      return TablesReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_TABLES](state, action) {
    return action.tables;
  }
}

export default TablesReducer.reduce;
