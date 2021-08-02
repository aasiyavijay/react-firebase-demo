import { ReactComponent as Grid } from './../../images/grid.svg';
import { ReactComponent as Clipboard } from './../../images/clipboard.svg';

const Nav = () => {
  return (
    <nav className="sidebar-nav">
      <li className="sidebar-nav-item active">
        <a>
          <span className="icon">
            <Grid />
          </span>
        </a>
      </li>
      <li className="sidebar-nav-item">
        <a>
          <span className="icon">
            <Clipboard />
          </span>
        </a>
      </li>
    </nav>
  )
}

export default Nav;
