import React from 'react'
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


export default List