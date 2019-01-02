import React, { Component } from "react";
import { Spin, Avatar } from "antd";
import { connect } from "react-redux";

import Head from "../components/Head";
import Nav from "../components/Nav";
import CheckForTable from "../components/CheckForTable";

class Tables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTable: null
    };
  }

  render() {
    const { tables } = this.props;
    const { selectedTable } = this.state;

    const ready = tables.length > 0;
    return (
      <Nav>
        <Head title="Avero - POS - Tables" />
        <div className="container">
          {!ready
            ? <div className="spin-container">
                <Spin size="large" />
              </div>
            : <div className="main">
                <TableGrid
                  tables={tables}
                  selectTable={this._selectTable}
                  selectedTable={selectedTable}
                />
                <div className="check-and-menu">
                  <CheckForTable table={selectedTable} />
                </div>
              </div>}
        </div>
        <style jsx>{`
          .container {
            margin-top: 32px;
            margin-left: 16px;
            margin-right: 16px;
            display: flex;
            justify-content: center;
            width: 100%;
          }
          .main {
            display: flex;
          }
          .check-and-menu {
            width: 65%;
          }
          .spin-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50%;
            width: 100%;
          }
        `}</style>
      </Nav>
    );
  }
  _selectTable = table => {
    this.setState({ selectedTable: table });
  };
}

const mapStateToProps = state => ({
  tables: state.tables
});

export default connect(mapStateToProps)(Tables);

const TableGrid = props => {
  const { tables, selectTable, selectedTable } = props;
  return (
    <div className="grid">
      <h2>Tables</h2>
      {tables.map(a =>
        <a key={a.id} onClick={() => selectTable(a)}>
          <Avatar
            style={{
              margin: 8,
              backgroundColor:
                selectedTable && selectedTable.id === a.id
                  ? "dimgrey"
                  : "lightgrey"
            }}
            size={100}
            shape="square"
          >
            {a.number}
          </Avatar>
        </a>
      )}
      <style jsx>
        {`
          .grid {
            width: 35%;
            mid-width: 136px;
          }
          h2 {
            margin-left: 8px;
          }
        `}
      </style>
    </div>
  );
};
