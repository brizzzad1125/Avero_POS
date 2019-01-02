import { connect } from "react-redux";

import Nav from "../components/Nav";
import Head from "../components/Head";

const Index = props =>
  <Nav>
    <Head />
    <div className="container">
      <p>Welcome to the Greasy Spoon Point of Sale by Avero.</p>
      {props.tables.length > 0 &&
        <div>
          <div>
            Total Tables: {props.tables.length}
          </div>
          <div>
            Total Open Checks: {props.checks.filter(a => !a.closed).length}
          </div>
          <div>
            Total Customers Served: {props.checks.filter(a => a.closed).length}
          </div>
        </div>}
    </div>
    <style jsx>
      {`
        .container {
          margin-top: 16px;
          margin-left: 16px;
        }
      `}
    </style>
  </Nav>;

const mapStateToProps = state => ({
  checks: state.checks,
  tables: state.tables
});

export default connect(mapStateToProps)(Index);
