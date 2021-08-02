import { useState } from 'react';

import { ReactComponent as ArrowUp } from './../../images/angle-up.svg';
import { ReactComponent as ArrowDown } from './../../images/angle-down.svg';

import './styles.scss';

const Card = ({ icon, title, content, isCollapsable, width = "300px" }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="card" style={{ "width": width }}>
      <div className="card-header">
        <div className="card-icon">
          {icon}
        </div>
        <div className="card-title">
          {title}
        </div>
        {isCollapsable
          ? (
            <div className="card-collapse-icon" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <ArrowDown /> : <ArrowUp />}
            </div>
          ) : null
        }
      </div>
      {!collapsed ?
        <div className="card-content">
          {content}
        </div>
        : null
      }
    </div>
  )
}

export default Card
