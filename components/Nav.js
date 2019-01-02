import Link from "next/link";

export default props =>
  <div className="main">
    <nav className="sidebar">
      <img src="/static/new-avero-logo-white.png" className="logo" />
      <ul className="nav-buttons">
        <li>
          <Link href="/tables">
            <a className="link">Tables</a>
          </Link>
        </li>
        <li>
          <Link href="/checks">
            <a className="link">Checks</a>
          </Link>
        </li>
      </ul>
    </nav>
    {props.children}
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        .link {
          color: white;
          font-size: 20px;
        }
        ul {
          list-style-type: none;
          padding-inline-start: 0;
        }
        .nav-buttons {
          display: flex;
          width: 120px;
          flex-direction: column;
          align-self: flex-start;
          margin: 16px;
          justify-content: space-between;
        }
        .sidebar {
          background: #34b2e6;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px;
        }
        .logo {
          width: 196px;
        }
        .main {
          display: flex;
          flex-direction: row;
          flex: 1;
          height: 100%;
        }
      `}
    </style>
  </div>;
