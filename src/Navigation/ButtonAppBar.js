import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


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

    return (
        <div>
            <AppBar position="fixed" color='primary'>
                <Toolbar variant='dense'>
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={props.toggleDrawer}
                    >
                        Menu
                    </Button>

                    <Typography
                        variant="subtitle1"
                        color="inherit"
                        align={'center'}
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
};

export default withStyles(styles)(ButtonAppBar);