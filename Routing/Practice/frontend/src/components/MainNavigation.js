import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={'/'} className={({isActive})=> isActive? classes.active: ''} end >Home</NavLink>
          </li>
          <li>
          <NavLink to={'/events'} className={({isActive})=> isActive? classes.active: ''} end  >Events</NavLink>
          </li>
          <li>
          <NavLink to={'/events/new'} className={({isActive})=> isActive? classes.active: ''} end  >Add Event</NavLink>
          </li>
      
        </ul>
      </nav>
    </header>
    
  );
}

export default MainNavigation;
