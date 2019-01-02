import ActionTypes from "./actionTypes";

class MenuItemsReducer {
  static reduce(state = [], action) {
    if (MenuItemsReducer[action.type]) {
      return MenuItemsReducer[action.type](state, action);
    } else {
      return state;
    }
  }

  static [ActionTypes.SET_MENU_ITEMS](state, action) {
    return action.menuItems;
  }
}

export default MenuItemsReducer.reduce;
