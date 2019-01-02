export default defineActionConstants([
  "SET_TABLES",
  "SET_CHECKS",
  "SET_MENU_ITEMS",
  "OPEN_CHECK",
  "CLOSE_CHECK"
]);

function defineActionConstants(names) {
  return names.reduce((result, name) => {
    result[name] = name;
    return result;
  }, {});
}
