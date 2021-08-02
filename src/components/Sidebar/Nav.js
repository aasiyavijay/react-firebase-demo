import {
  BrowserRouter as Router,
  Link,
  useLocation
} from 'react-router-dom';

import { ReactComponent as Grid } from './../../images/grid.svg';
import { ReactComponent as Clipboard } from './../../images/clipboard.svg';

const Nav = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <nav className="sidebar-nav">
      <li className={`sidebar-nav-item ${splitLocation[1] === "" ? "active" : ""}`}>
        <Link to="/">
          <span className="icon">
            <Grid />
          </span>
        </Link>
      </li>
      <li className={`sidebar-nav-item ${splitLocation[1] === "notes" ? "active" : ""}`}>
        <Link to="/notes">
          <span className="icon">
            <Clipboard />
          </span>
        </Link>
      </li>
    </nav>
  )
}

export default Nav;
