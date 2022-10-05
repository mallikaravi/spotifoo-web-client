import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "../styles/Sidebar.css";
import Logo from "../assets/logo.png";

import { Sidemenubar } from './Sidemenubar';

export const Sidebar: React.FunctionComponent = () => {
    return (
        <>

            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
                <ul className="nav-menu-items" >
                    <li className="navbar-toggle">
                        <Link to="/" className="menu-bars">
                            <img src={Logo} className="imglogo" />
                        </Link>
                    </li>
                    {Sidemenubar.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <div className={item.icon}></div>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}