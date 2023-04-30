import { NavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { ModeToggleSwitch } from '../ModeToggleSwitch/ModeToggleSwitch';
import s from './NavBar.module.css';

export const NavBar:FunctionComponent = () => {
    return(
        <nav className={s.navBar}>
            <li className={s.navItem}>
                <NavLink className={s.navLink} to="/">Home</NavLink>
            </li>
            <li className={s.navItem}>
                <NavLink className={s.navLink} to="/cars">List</NavLink>
            </li>
            <li className={s.navItem}>
                <ModeToggleSwitch />
            </li>
        </nav>
    );
}