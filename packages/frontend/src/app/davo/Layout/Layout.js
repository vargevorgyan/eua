import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import headerImg from "../images/header-img.png"
import "../Layout/layout.css"

const Layout = () => {
  return (
    <>
        <header>
            <div className='header-top'>
                <img src={headerImg} alt="" />
            </div>
        </header>
        <main>
            <div className='sideBar'>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link">Traffic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/overview" className="nav-link">Overview</NavLink>
                    </li>
                    <li>
                        <NavLink to="/csv" className="nav-link">CSV</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </main>
    </>
  )
}

export default Layout
