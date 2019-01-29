import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

function ButtonAppBar(props) {
    const { classes } = props
    return (
        <div className={classes.root} >
            <AppBar
                position="fixed"
                color="primary"
            >
                <Toolbar variant='dense'>
                    <IconButton
                     className={classes.menuButton} 
                     color="inherit" 
                     aria-label="Menu"
                     onClick={props.toggleDrawer}
                     >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        className={classes.grow}
                        variant="subtitle1"
                        color="inherit"
                        textAlign="center"
                        align='center'
                    >
                        Knowledge Base App In React.Js
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)