import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Button } from "antd";

import OpenCheck from "./OpenCheck";
import { openCheck, getCheck } from "../util/avero-api";
import Actions from "../state/actions";

class CheckForTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      check: null
    };
  }

  render() {
    const { table } = this.props;
    if (!table) {
      return (
        <div>
          <p>Please select a table</p>
          <style jsx>{`
            div {
              margin-top: 36px;
              text-align: center;
              width: 100%;
            }
          `}</style>
        </div>
      );
    }

    var { ready, check } = this.state;

    if (!ready) {
      return (
        <div className="spinner-container">
          <Spin size="large" />
          <style jsx>
            {`
              .spinner-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
            `}
          </style>
        </div>
      );
    }

    if (!check) {
      return (
        <div>
          <Button onClick={this._openCheck}>
            Open check for Table # {table.number}
          </Button>
          <style jsx>{`
            div {
              margin-top: 36px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
          `}</style>
        </div>
      );
    }

    const title = `Check for Table ${table.number}`;
    return (
      <OpenCheck
        title={title}
        check={check}
        updateCheck={this._updateCheck}
        clearOnClose
      />
    );
  }

  componentDidUpdate(prevProps) {
    //check if new table is select
    if (this.props.table !== prevProps.table) {
      this.setState({ ready: false, check: null });
      this._fetchCheck();
    }
  }

  _fetchCheck = () => {
    const { checks, table } = this.props;
    const check = checks.find(a => a.tableId === table.id && !a.closed);

    //if no check found allow user to create check
    if (!check) {
      this.setState({ ready: true });
    } else {
      getCheck(check.id).then(check => {
        this.setState({ ready: true, check: check });
      });
    }
  };

  _openCheck = () => {
    const { table } = this.props;

    openCheck(table.id).then(check => {
      this.setState({ check: check });
      this.props.dispatch(Actions.openCheck(check));
    });
  };

  _updateCheck = check => {
    this.setState({ check: check });
  };
}

const mapStateToProps = state => ({
  checks: state.checks
});

export default connect(mapStateToProps)(CheckForTable);
