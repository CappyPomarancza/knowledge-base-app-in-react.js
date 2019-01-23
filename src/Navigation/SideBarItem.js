import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'


const SideBarItem = props => (
    <div
        onClick={props.toggleSideBar}
    >
        <Link
            to={props.to}
            style={{ textDecoration: 'none' }}
        >
            <MenuItem>
                {props.label}
            </MenuItem>
        </Link>
    </div>
)
export default SideBarItem