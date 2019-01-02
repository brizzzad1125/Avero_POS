import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { menuItems, addItemToCheck } = this.props;

    return (
      <Card title={"Menu"} style={{ width: "45%", minWidth: 300 }}>
        <ol style={{ padding: 0 }}>
          {menuItems.map(item =>
            <Item key={item.id} addItemToCheck={addItemToCheck} item={item} />
          )}
        </ol>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems
});

export default connect(mapStateToProps)(Menu);

const Item = props => {
  const { item, addItemToCheck } = props;
  return (
    <li className="item">
      <div className="price-and-name">
        <div>
          {item.name}
        </div>
        <div>
          ${item.price}
        </div>
      </div>
      <Button onClick={() => addItemToCheck(item.id)}>Add</Button>
      <style jsx>
        {`
          .item {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            padding-bottom: 16px;
            align-items: center;
          }
          .price-and-name {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding-right: 8px;
          }
        `}
      </style>
    </li>
  );
};
