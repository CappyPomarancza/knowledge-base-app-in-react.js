import React from 'react'
import PropTypes from 'prop-types'

const Forms = (props) => (
    <div>
        <div>
            <input
                type={'text'}
                placeholder={'Title'}
                value={props.newProblemTitle}
                onChange={props.newProblemTitleChangeHandler}
            />
        </div>
        <div>
            <input
                type={'text'}
                placeholder={'Key Words'}
                value={props.newProblemKeyWords}
                onChange={props.newProblemKeyWordsChangeHandler}
            />
        </div>
        <div>
            <input
                type={'text'}
                placeholder={'Description'}
                value={props.newProblemDescription}
                onChange={props.newProblemDescriptionChangeHandler}
            />
        </div>
        <div>
            <button
                onClick={props.onAddNewProblemClick}
            >
                Add New Problem
        </button>
        </div>
    </div>
)

Forms.propsType = {
    newProblemTitle: PropTypes.string.isRequired,
    newProblemKeyWords: PropTypes.string.isRequired,
    newProblemDescription: PropTypes.string.isRequired
}

export default Forms