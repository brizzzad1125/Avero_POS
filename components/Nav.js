import Link from "next/link";
import { Button } from "antd";

export default props =>
  <div className="main">
    <nav className="sidebar">
      <img src="/static/new-avero-logo-white.png" className="logo" />
      <div className="nav-buttons">
        <Link href="/tables">
          <Button>Tables</Button>
        </Link>
        <Link href="/checks">
          <Button>Checks</Button>
        </Link>
      </div>
    </nav>
    {props.children}
    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: 'Open Sans', arial, sans-serif;
          height: 100%;
        }
        :global(#__next, html) {
          height: 100%;
        }
        .nav-buttons {
          display: flex;
          width: 120px;
          flex-direction: column;
          align-self: center;
          margin: 16px;
          height: 72px;
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
          width: 256px;
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
