import React, { useState } from 'react';
import { routes } from '../../utils/constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import MobileMenu from '../Pages/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  const firstRoute = Object.values(routes)[0];
  const [activeRoute, setActiveRoute] = useState(firstRoute);
  const [showMenu, setShowMenu] = useState(false);

  const handleRouteClick = (route) => {
    setActiveRoute(route);
    setShowMenu(false); // Close the menu when a menu item is clicked
    
  };

  return (
    <div className='navigation'>
    <nav>
      <Logo />
      <button className="menuButton" onClick={() => setShowMenu(true)}>
      <FontAwesomeIcon icon={faBars} />
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
    </nav>
    {showMenu && (
      <MobileMenu
        activeRoute={activeRoute}
        handleRouteClick={handleRouteClick}
        setShowMenu={setShowMenu}
      />
    )}
    </div>
  );
};

export default Navigation;