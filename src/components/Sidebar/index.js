import { ReactComponent as Logo } from './../../images/logo.svg';
import Avatar from './../../images/avatar.jpg';

import './styles.scss';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="sidebar-divider"></div>
      <div className="sidebar-nav-container">
        <Nav />
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-divider"></div>
        <div className="sidebar-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
