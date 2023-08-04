import React from 'react';
import { routes } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ activeRoute, handleRouteClick, setShowMenu }) => {
  return (
    <div className="mobileMenu">
      <button className="close-button" onClick={() => setShowMenu(false)}>
      <FontAwesomeIcon icon={faXmark} />
      </button>
      <ul>
        {Object.values(routes)
          .filter((route) => route.includeInNavigation)
          .map((route) => (
            <li
              key={route.name}
              onClick={() => handleRouteClick(route)}
              className={activeRoute === route ? 'active' : ''}
            >
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
