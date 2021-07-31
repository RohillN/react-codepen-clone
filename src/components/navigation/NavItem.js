import React from 'react';

export default function NavItem(props) {
    return (
        <li className="navbar-item">
            {props.children}
        </li>
    )
}
