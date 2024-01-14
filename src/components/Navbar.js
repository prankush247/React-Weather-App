import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
        <nav id={`${props.mode === 'light' ? 'nav' : 'dnav'}`}>
        <div id={`${props.mode === 'light' ? 'site' : 'dsite'}`}>
           <span id="s1" >Weather</span><span>360°</span>
        </div> 
        <ul>
          <li>
            <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
              About
            </NavLink>
          </li>
        </ul>
        <button onClick={props.toggleMode} className="mode" id={`${props.mode === 'light' ? 'lmode' : 'dmode'}`}>Go {props.mode === 'light' ? 'Dark' : 'Light'} Mode</button>
        </nav>
    </div>
  )
}
