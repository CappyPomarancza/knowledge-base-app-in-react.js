import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MyPaper from './MyPaper'


class Forms extends React.Component {

    state = {
        isProblemAdded: false,
        newProblemTitle: '',
        newProblemDescription: '',
        newProblemKeyWords: ''
    }

    newProblemTitleChangeHandler = (event) => {
        this.setState({
            newProblemTitle: event.target.value
        })
    }

    newProblemKeyWordsChangeHandler = (event) => {
        this.setState({
            newProblemKeyWords: event.target.value
        })
    }

    newProblemDescriptionChangeHandler = (event) => {
        this.setState({
            newProblemDescription: event.target.value
        })
    }

    onAddNewProblemClick = () => {
        const request = {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.newProblemTitle,
                keyWords: this.state.newProblemKeyWords,
                description: this.state.newProblemDescription
            })
        }

        fetch('https://todo-e8a15.firebaseio.com/cappy-problems/.json'
            , request)
            .then(response => {
                this.setState({
                    newProblemTitle: '',
                    newProblemDescription: '',
                    newProblemKeyWords: '',
                    isProblemAdded: true
                })
            })
    }

    render() {
        return (
            <div>
                <MyPaper
                >
                    {this.state.isProblemAdded ?

                        <div>
                            <p>Your Problem was Added to base</p>
                            <p>Press F5 to add next Problem</p>
                        </div>
                        :
                        < div >
                            <div>
                                <TextField
                                    rowsMax={true}
                                    label="Problem Title"
                                    placeholder="Write Problem Title"
                                    fullWidth={true}
                                    margin="normal"
                                    value={this.newProblemTitle}
                                    onChange={this.newProblemTitleChangeHandler}
                                    ref='title'
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Key Words"
                                    placeholder={'Write Key Words'}
                                    fullWidth={true}
                                    margin='normal'
                                    value={this.newProblemKeyWords}
                                    onChange={this.newProblemKeyWordsChangeHandler}
                                    ref='keyWords'
                                />
                            </div>
                            <div>
                                <TextField
                                    label={'Description'}
                                    placeholder={'Write Solution'}
                                    fullWidth={true}
                                    margin='normal'
                                    value={this.newProblemDescription}
                                    onChange={this.newProblemDescriptionChangeHandler}
                                    multiline
                                    rows="10"
                                    ref='description'
                                />
                            </div>
                            <div>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    fullWidth={true}
                                    onClick={this.onAddNewProblemClick}
                                    type='submit'
                                >
                                    Add New Problem
                            </Button>
                            </div>
                        </div>

                    }
                </MyPaper>
            </div>
        )
    }
}

Forms.propsType = {
    newProblemTitle: PropTypes.string.isRequired,
    newProblemKeyWords: PropTypes.string.isRequired,
    newProblemDescription: PropTypes.string.isRequired
}

export default Forms