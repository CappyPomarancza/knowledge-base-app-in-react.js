import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SideBarItem from './SideBarItem'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;



    return (
      <div>
        <div>

          <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        </div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <div className={classes.list}>
              <List>
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
                  to={'/favourites'}
                  label={'Favourite Problems'}
                  toggleSideBar={this.props.toggleSideBar}
                />
              </List>
              <Divider />
            </div>
          </div>
        </Drawer>

      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);