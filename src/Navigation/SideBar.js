import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import SideBarItem from './SideBarItem'

class SideBar extends React.Component {

    render(){
        return(
            <Drawer 
                docked={false}
                onRequestChange={this.props.toggleSideBar}
                open={this.props.isSideBarOpen}
            >
            <SideBarItem
                    to={'/problemsList'}
                    label={'Problem List'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/forms'}
                    label={'Add New Problem'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                <SideBarItem
                    to={'/favourite'}
                    label={'Add New Problem'}
                    toggleSideBar={this.props.toggleSideBar}
                />
                
            </Drawer>
        )
    }

}

export default SideBar