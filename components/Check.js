import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";

class Check extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { check, title, menuItems, voidItemOnCheck, closeCheck } = this.props;

    const { orderedItems } = check;

    return (
      <Card title={title} style={{ width: "45%", minWidth: 300 }}>
        <div className="container">
          {orderedItems &&
            <ol style={{ padding: 0 }}>
              {orderedItems.map(item => {
                const menuItem = menuItems.find(a => a.id === item.itemId);
                return (
                  <Item
                    key={item.id}
                    menuItem={menuItem}
                    checkItem={item}
                    voidItemOnCheck={voidItemOnCheck}
                    closed={check.closed}
                  />
                );
              })}
            </ol>}
          {!check.closed &&
            <Button onClick={() => closeCheck(check.id)}>Close</Button>}
          {check.closed &&
            <div>
              <div className="closed-line">
                <div>Tax</div>
                <div>
                  ${Math.round(check.tax * 100) / 100}
                </div>
              </div>
              <div className="closed-line">
                <div>Tip</div>
                <div>
                  ${Math.round(check.tip * 100) / 100}
                </div>
              </div>
            </div>}
          <style jsx>
            {`
              .container {
                display: flex;
                flex-direction: column;
                justify-content: 'center';
              }
              .closed-line {
                display: flex;
                justify-content: space-between;

                font-size: 14px;
              }
            `}
          </style>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.menuItems
});

export default connect(mapStateToProps)(Check);

const Item = props => {
  const { menuItem, voidItemOnCheck, checkItem, closed } = props;
  return (
    <li className="item">
      <div className="price-and-name">
        <div>
          {menuItem.name}
        </div>
        <div>
          ${menuItem.price}
        </div>
      </div>
      {checkItem.voided
        ? <div className="voided">Voided</div>
        : !closed
          ? <Button onClick={() => voidItemOnCheck(checkItem.id)}>Void</Button>
          : null}
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
            width: 75%;
            padding-right: 8px;
          }
          .voided {
            width: 60.47px;
            text-align: center;
          }
        `}
      </style>
    </li>
  );
};
