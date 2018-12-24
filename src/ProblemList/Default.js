import React from 'react'
import PropTypes from 'prop-types'



const Default = (props) => (
    <div>
        <button
            onClick={props.clickHandler}
        >
        wft?
            {props.label}
        </button>
    </div>
)


Default.propTypes ={
    clickHandler: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Default
