import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MyPaper from './MyPaper'


class Forms extends React.Component {

    state = {
        name : 'CAt in the HAt',
        isProblemAdded: false,
        newProblemTitle: '',
        newProblemDescription: '',
        newProblemKeyWords: ''
    }


    newProblemTitleChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            newProblemTitle: event.target.value
        })
    }

    newProblemKeyWordsChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            newProblemKeyWords: event.target.value
        })
    }

    newProblemDescriptionChangeHandler = (event) => {
        console.log(event.target.value)
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
                console.log(response)
                this.setState({
                    newProblemTitle: '',
                    newProblemDescription: '',
                    newProblemKeyWords: '',
                    isProblemAdded: true
                })
                console.log('call back')
            })
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    render() {
        return (
            <div>
                <MyPaper
                >
                    {this.state.isProblemAdded ?

                        <div>Your Problem was Added to base</div>
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
                                    rowsMax="4"
                                />
                            </div>
                            <div>
                        
                            </div>
                            <div>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    fullWidth={true}
                                    onClick={this.onAddNewProblemClick}
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