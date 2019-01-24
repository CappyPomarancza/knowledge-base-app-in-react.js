import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import SideBar from './SideBar'
import { Toolbar, IconButton } from 'material-ui';
import classes from '*.module.scss';


class Navigation extends React.Component {
    state = {
        isOpen: false
    }
    toggleHendler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    

    render() {
        console.log('NAVI test')
        return (
            <div>
                <AppBar
                    position={'static'}
                    title={'Knowledge-base-app'}
                >
                    <Toolbar>
                        <IconButton 
                             color='inherit' aria-label='MENU'
                        >
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SideBar
                    isSideBarOpen={this.state.isOpen}
                    toggleSideBar={this.toggleHendler}
                />
            </div>
        )
    }
}
export default Navigation