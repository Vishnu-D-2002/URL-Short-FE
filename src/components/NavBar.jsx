import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

function NavBar() {
  return (
      <div>
            <nav>
              <ul>
                  <li>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                  </li>
                  <li>
                      <NavLink to='/createURL'>Create URL</NavLink>
                  </li>
                  <li>
                      <NavLink to='/totalURL'>Total URLs Created</NavLink>
                  </li>
              </ul>
            </nav>
      </div>
  )
}

export default NavBar