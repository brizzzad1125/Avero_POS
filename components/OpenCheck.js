import React, { Component } from "react";
import { connect } from "react-redux";

import Check from "./Check";
import Menu from "./Menu";
import { addItemToCheck, voidItemOnCheck, closeCheck } from "../util/avero-api";
import Actions from "../state/actions";

class OpenCheck extends Component {
  render() {
    const { check, title } = this.props;
    return (
      <div className="container">
        <Check
          title={title}
          check={check}
          voidItemOnCheck={this._voidItemOnCheck}
          closeCheck={this._closeCheck}
        />
        <Menu addItemToCheck={this._addItemToCheck} />
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        `}</style>
      </div>
    );
  }

  _addItemToCheck = menuItemId => {
    var check = Object.assign({}, this.props.check);

    addItemToCheck(check.id, menuItemId).then(item => {
      //add item to check in state
      var { orderedItems } = check;
      if (!orderedItems) {
        orderedItems = [];
      }
      orderedItems.push(item);
      check.orderedItems = orderedItems;

      this.props.updateCheck(check);
    });
  };

  _voidItemOnCheck = orderedItemId => {
    var check = Object.assign({}, this.props.check);

    voidItemOnCheck(check.id, orderedItemId).then(item => {
      //update item in check void
      var { orderedItems } = check;

      const index = orderedItems.findIndex(a => a.id === item.id);
      orderedItems[index] = item;
      check.orderedItems = orderedItems;

      this.props.updateCheck(check);
    });
  };

  _closeCheck = () => {
    const { check, clearOnClose } = this.props;

    closeCheck(check.id).then(check => {
      this.props.dispatch(Actions.closeCheck(check));
      if (clearOnClose) {
        this.props.updateCheck(null);
      } else {
        this.props.updateCheck(check);
      }
    });
  };
}

export default connect()(OpenCheck);
