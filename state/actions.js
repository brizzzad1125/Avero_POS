import ActionTypes from "./actionTypes";

export default class Actions {
  static setTables(tables) {
    return {
      type: ActionTypes.SET_TABLES,
      tables
    };
  }

  static setChecks(checks) {
    return {
      type: ActionTypes.SET_CHECKS,
      checks
    };
  }

  static setMenuItems(menuItems) {
    return {
      type: ActionTypes.SET_MENU_ITEMS,
      menuItems
    };
  }

  static openCheck(check) {
    return {
      type: ActionTypes.OPEN_CHECK,
      check
    };
  }

  static closeCheck(check) {
    return {
      type: ActionTypes.CLOSE_CHECK,
      check
    };
  }
}
