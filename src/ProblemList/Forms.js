import React from 'react'
import PropTypes from 'prop-types'

const Forms = (props) => (
    <div>
        <input
            type={'text'}
            placeholder={'Title'}
            value={props.newProblemTitle}
            onChange={props.newProblemChangeHandler}
        />
        {/* <input
            type={'text'}
            placeholder={'Key Words'}
            value={props.newProblemKeyWords}
            onChange={props.newProblemChangeKeyWords}
        />
        <input
            type={'text'}
            placeholder={'Description'}
            value={props.newProblemDescription}
            onChange={props.newProblemChangeDescription}
        /> */}
        <button
            onClick={props.onAddNewProblemClick}
        >
            Add New Problem
        </button>
    </div>
)

Forms.propsType = {
    newProblemTitle: PropTypes.string.isRequired,
    // newProblemKeyWords: PropTypes.string.isRequired,
    // newProblemDescription: PropTypes.string.isRequired
}

export default Forms