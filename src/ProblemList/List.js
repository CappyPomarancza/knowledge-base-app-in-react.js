import React from 'react'
import PropTypes from 'prop-types'
import Problem from './Problem'


const List = (props) => (
    <div>
        {
            props.problems.map(problem => (
                <Problem
                    key={problem.key}
                    problem={problem}
                    onEditProblemHandler={props.onEditProblemHandler}
                />
            ))
        }
    </div>
)
List.propTypes = {
    problems: PropTypes.array.isRequired
}

export default List