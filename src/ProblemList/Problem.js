import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import NavigationIcon from '@material-ui/icons/Navigation'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'



import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { EditorVerticalAlignTop } from 'material-ui/svg-icons'

import { createMuiTheme } from '@material-ui/core/styles'



class Problem extends React.Component {
    state = {
        isEdited: false,
        problemTitle: this.props.problem.title,
        problemKeyWords: this.props.problem.keyWords,
        problemDescription: this.props.problem.description,
        problemKey: this.props.problem.key
    }



    editToggle = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            problemTitle: this.props.problem.title,
            problemKeyWords: this.props.problem.keyWords,
            problemDescription: this.props.problem.description,
            problemKey: this.props.problem.key
        })

    }
    onProblemTitleChangeHandler = (event) => {
        this.setState({
            problemTitle: event.target.value
        })
    }
    onProblemDescriptionChangeHandler = (event) => {
        this.setState({
            problemDescription: event.target.value
        })
    }
    onProblemKeyWordsChangeHandler = (event) => {
        this.setState({
            problemKeyWords: event.target.value
        })
    }
    onDeleteProblemClick = (key) => {
        const request = {
            method: 'DELETE'
        }

        fetch(`https://todo-e8a15.firebaseio.com/cappy-problems/${key}.json`
            , request
        )

        console.log('deleted Problem')
    }
    render() {

        return (

            <div>
                {this.state.isEdited ?
                    <div>
                        <TextField
                            label="New Problem Title"
                            placeholder="Write New Problem Title"
                            fullWidth={true}
                            margin="normal"
                            onChange={this.onProblemTitleChangeHandler}
                            value={this.state.problemTitle}
                        />
                        <TextField
                            label="New Problem Description"
                            placeholder="Write New Problem Description"
                            fullWidth={true}
                            margin="normal"
                            onChange={this.onProblemDescriptionChangeHandler}
                            value={this.state.problemDescription}
                        />
                        <TextField
                            label="New Problem #KeyWords"
                            placeholder="Write New Problem #KeyWords"
                            fullWidth={true}
                            margin="normal"
                            onChange={this.onProblemKeyWordsChangeHandler}
                            value={this.state.problemKeyWords}
                        />
                        <div>
                            <Button

                                variant="contained"
                                color="primary"
                                onClick={
                                    () => {
                                        this.props.onEditProblemHandler(
                                            this.props.problem.key,
                                            this.state.problemTitle,
                                            this.state.problemDescription,
                                            this.state.problemKeyWords
                                        )
                                        this.editToggle()
                                    }
                                }
                            >
                                <SaveIcon />
                                SAVE CHANGES
                        </Button>
                            <Button

                                variant="contained"
                                color="secondary"
                                onClick={
                                    () => {
                                        this.onDeleteProblemClick(this.props.problem.key)
                                    }
                                }
                            >
                                <DeleteIcon  />
                                DELETE PROBLEM
                        </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.editToggle}

                            >
                                <Cancel />
                                CANCEL
                        </Button>
                        </div>
                    </div>
                    :
                    <div>

                        <div>

                            <h2> {this.props.problem.title}</h2>
                            <h2>
                                {
                                    '#' + this.props.problem.keyWords
                                }
                            </h2>

                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.editToggle}
                            fullWidth={true}
                        >
                            EDIT
                        </Button>

                    </div>
                }
            </div>
        )
    }
}

export default Problem