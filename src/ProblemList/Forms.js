import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import MyPaper from './MyPaper'


const Forms = (props) => (
    <div>
        <MyPaper

        >
            <div>
                <TextField
                    label="Problem Title"
                    placeholder="Write Problem Title"
                    fullWidth={true}
                    margin="normal"
                    value={props.newProblemTitle}
                    onChange={props.newProblemTitleChangeHandler}
                />
            </div>
            <div>
                <TextField
                    label="Key Words"
                    placeholder={'Write Key Words'}
                    fullWidth={true}
                    margin='normal'
                    value={props.newProblemKeyWords}
                    onChange={props.newProblemKeyWordsChangeHandler}
                />
            </div>
            <div>
                <TextField
                    label={'Description'}
                    placeholder={'Write Solution to Problem'}
                    fullWidth={true}
                    margin='normal'
                    value={props.newProblemDescription}
                    onChange={props.newProblemDescriptionChangeHandler}
                />
            </div>
            <div>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    fullWidth={true}
                    onClick={props.onAddNewProblemClick}
                >
                    Add New Problem
        </Button>
            </div>
        </MyPaper>
    </div>
)

Forms.propsType = {
    newProblemTitle: PropTypes.string.isRequired,
    newProblemKeyWords: PropTypes.string.isRequired,
    newProblemDescription: PropTypes.string.isRequired
}

export default Forms