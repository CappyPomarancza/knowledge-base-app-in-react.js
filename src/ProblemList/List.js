import React from 'react'
import Problem from './Problem'
import Divider from '@material-ui/core/Divider'


const List = (props) => (
    <div>
        {
            props.problems.map(problem => (
                <Problem
                    key={problem.key}
                    problem={problem}

                    onDeleteProblemClick={props.onDeleteProblemClick}
                    onEditProblemHandler={props.onEditProblemHandler}
                />
                
            ))
            
        }
        <Divider />
    </div>
)


export default List