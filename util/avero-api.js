const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4ODA3NDFjLTYyZDItNDg0My1hYTc5LTE2N2YxMDYwYzAyZCIsIm5hbWUiOiJCcmFkIETigJlBbnRvbmlvIn0.tLalK7cpFvtJlEwcC6zCnjqjBUdbfNcjWZeSCynm1A4";
const root = "https://check-api.herokuapp.com";

/**
* list the tables in the restaurant
* @return {Promise} Array of all table objects
*/
exports.getTables = () => {
  return fetch(`${root}/tables`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* list the menu items 
* @return {Promise} Array of all menu item objects
*/
exports.getMenuItems = () => {
  return fetch(`${root}/items`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* list all checks with basic info
* @return {Promise} Array of all check objects
*/
exports.getChecks = () => {
  return fetch(`${root}/checks`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* create a new check
* @param {tableId}
* @return {Promise} Check Object
*/
exports.openCheck = tableId => {
  return fetch(`${root}/checks`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      tableId: tableId
    })
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* get the details for a check
* @param {checkId}
* @return {Promise} Check Object
*/
exports.getCheck = checkId => {
  return fetch(`${root}/checks/${checkId}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* add a menu item to a check
* @param {checkId, itemId}
* @return {Promise} item Object
*/
exports.addItemToCheck = (checkId, itemId) => {
  return fetch(`${root}/checks/${checkId}/addItem`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ itemId: itemId })
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* void an item on a check
* @param {checkId, orderedItemId}
* @return {Promise} item Object
*/
exports.voidItemOnCheck = (checkId, orderedItemId) => {
  return fetch(`${root}/checks/${checkId}/voidItem`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ orderedItemId: orderedItemId })
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};

/**
* mark a check as closed
* @param {checkId}
* @return {Promise} check object
*/
exports.closeCheck = checkId => {
  return fetch(`${root}/checks/${checkId}/close`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(body => {
      return JSON.parse(body);
    });
};
