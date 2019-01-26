import React from 'react'
import Button from '@material-ui/core/Button'

const Default = (props) => (
    <div>
            <Button
                variant="contained"
                color="primary"
                onClick={props.clickHandler}
                fullWidth={true}
            >
                {props.label}
            </Button>
    </div>
)

export default Default
