import React from 'react'
import Button from  '@material-ui/core/Button'
import { LARGE } from 'material-ui/utils/withWidth';

const Default = (props) => (
    <div>
        <Button 
        variant="contained" 
        color="primary"
        onClick={props.clickHandler}
        fullWidth={true}
        size={'LARGE'}
        >
        {props.label}
    </Button>
    </div>
)

export default Default
