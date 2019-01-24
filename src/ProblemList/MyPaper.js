import React from 'react'
import Paper from '@material-ui/core/Paper'


const styles = {
    margin: '50px',
    padding: '50px'
}

const MyPaper = props =>(
    <Paper 
        elevation={24}
        style={styles}
    >
        {props.children}
    </Paper>
)

export default MyPaper