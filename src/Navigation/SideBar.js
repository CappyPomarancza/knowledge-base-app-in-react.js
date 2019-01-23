import React from 'react'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'


class SideBar extends React.Component {
    render() {
        return (
            <Drawer
            docked={false}
            onRequestChange={this.props.toggleSideBar}
            open={this.props.isSideBarOpen}
            >
            <SideBarItem
                to={'/dashboard'}
                label={'Dashboard'}
                toggleSideBar={this.props.toggleSideBar}
            />
            <SideBarItem
                to={'/test1'}
                label={'TEST!!!1111'}
                toggleSideBar={this.props.toggleSideBar}
            />
            <SideBarItem
                to={'/test2'}
                label={'test2222@@@'}
                toggleSideBar={this.props.toggleSideBar}
            />
            </Drawer>
        )
    }
}

export default SideBar