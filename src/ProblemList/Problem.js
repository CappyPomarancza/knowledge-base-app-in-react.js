import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'
import Checkbox from './Checkbox'

import ProblemView from './ProblemView';



class Problem extends React.Component {
    state = {
        isShowed: false,
        isEdited: false,
        problemTitle: this.props.problem.title,
        problemKeyWords: this.props.problem.keyWords,
        problemDescription: this.props.problem.description,
        problemKey: this.props.problem.key
    }
    styles = {
        cols: 40,
        rows: 5,
        width: 200,
        height: 50,
        name: Text
    }
    viewToggle = () => {
        this.setState({
            isShowed: true
        })
        console.log('test view')
    }
    backViewToggle = () => {
        this.setState({
            isShowed: false
        })
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
                {
                    this.state.isShowed ?
                        <div>
                            <ProblemView
                                backClickHndler={this.backViewToggle}
                                problemTitle={this.state.problemTitle}
                                problemKeyWords={this.state.problemKeyWords}
                                problemDescription={this.state.problemDescription}
                            />
                            <Divider />
                        </div>
                        :
                        this.state.isEdited ?
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
                                    label="New Problem #KeyWords"
                                    placeholder="Write New Problem #KeyWords"
                                    fullWidth={true}
                                    margin="normal"
                                    onChange={this.onProblemKeyWordsChangeHandler}
                                    value={this.state.problemKeyWords}
                                />
                                <TextField
                                    id="filled-multiline-static"
                                    label="Write New Solution"
                                    multiline
                                    rows="10"
                                    defaultValue={this.state.problemDescription}
                                    margin="normal"
                                    fullWidth={'true'}
                                    variant="filled"
                                    onChange={this.onProblemDescriptionChangeHandler}
                                    value={this.state.problemDescription}
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
                                        <DeleteIcon />
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
                            : <div>
                                <div>

                                    <h1> {this.props.problem.title}</h1>
                                    <h3>
                                        {
                                            '#' + this.props.problem.keyWords
                                        }
                                    </h3>
                                        <Checkbox />
                                </div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.editToggle}
                                >
                                    EDIT
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.viewToggle}
                                >
                                    Show
                                </Button>
                                <Divider />
                             </div>
                }
            </div>
        )
    }
}

export default Problem