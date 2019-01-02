import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Spin } from "antd";
import moment from "moment";

import Head from "../components/Head";
import Check from "../components/Check";
import OpenCheck from "../components/OpenCheck";
import Nav from "../components/Nav";
import { getCheck } from "../util/avero-api";

class Checks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCheck: null
    };
  }

  render() {
    const { checks, tables } = this.props;

    if (tables.length === 0) {
      return (
        <Nav>
          <Head title="Avero - POS - Checks" />
          <div className="spin-container">
            <Spin size="large" />
          </div>
          <style jsx>
            {`
              .spin-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50%;
                width: 100%;
              }
            `}
          </style>
        </Nav>
      );
    }

    const { selectedCheck } = this.state;

    const showOpenCheck = selectedCheck && !selectedCheck.closed;
    const showClosedCheck = selectedCheck && selectedCheck.closed;
    return (
      <Nav>
        <Head title="Avero - POS - Checks" />
        <div className="container">
          <Table
            size={"small"}
            dataSource={checks}
            columns={columns(tables, selectedCheck)}
            onRow={record => {
              return { onClick: () => this._selectRow(record) };
            }}
          />
          {showOpenCheck &&
            <OpenCheck
              check={selectedCheck}
              title={"Check"}
              updateCheck={this._updateSelectedCheck}
            />}
          {showClosedCheck &&
            <Check
              title={"Check"}
              check={selectedCheck}
              style={{ width: 400 }}
            />}
        </div>
        <style jsx global>
          {`
            .ant-table {
              font-size: 11px;
              line-height: 1;
              display: block;
              width: 330px;
              height: 100%;
              margin-right: 16px;
            }
          `}
        </style>
        <style jsx>{`
          .container {
            width: 100%;
            display: flex;
          }
        `}</style>
      </Nav>
    );
  }
  _selectRow = record => {
    getCheck(record.id).then(check => {
      this.setState({ selectedCheck: check });
    });
  };

  _updateSelectedCheck = check => {
    this.setState({ selectedCheck: check });
  };
}

const columns = (tables, selectedCheck) => {
  var selectedID;
  if (selectedCheck) {
    selectedID = selectedCheck.id;
  }
  return [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: id =>
        <div
          style={
            id === selectedID ? { color: "#34b2e6", fontWeight: "bold" } : {}
          }
        >
          {id}
        </div>
    },
    {
      title: "Status",
      dataIndex: "closed",
      key: "closed",
      render: closed => (closed ? "Closed" : "Open")
    },
    {
      title: "Updated",
      dataIndex: "dateUpdated",
      defaultSortOrder: "descend",
      key: "dateUpdated",
      render: dateUpdated => new moment(dateUpdated).format("M/D/YY h:mm:ss a")
    },
    {
      title: "Table",
      dataIndex: "tableId",
      key: "tableId",
      render: tableId => tables.find(a => a.id === tableId).number
    }
  ];
};

const mapStateToProps = state => ({
  checks: state.checks,
  tables: state.tables
});

export default connect(mapStateToProps)(Checks);
