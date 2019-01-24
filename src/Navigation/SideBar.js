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
            
            
            
            </Drawer>
        )
    }

}

export default SideBar