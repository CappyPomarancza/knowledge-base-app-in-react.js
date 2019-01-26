import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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
        console.log(this.props.problem.key)

        const theme = createMuiTheme({
            palette: {
                primary: {
                    light: '#757ce8',
                    main: '#3f50b5',
                    dark: '#002884',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                },
            },
        });
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
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.editToggle}
                            fullWidth={true}
                        >
                            CANEL
                        </Button>
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
                            fullWidth={true}
                        >
                            SAVE CHANGES
                        </Button>
                        <Button

                            variant="contained"
                            color="secondary"
                            onClick={
                                () => {
                                    this.onDeleteProblemClick(this.props.problem.key)
                                    console.log('wTF??')

                                }
                            }
                            fullWidth={true}
                        >
                            DELETE PROBLEM
                        </Button>
                    </div>
                    :
                    <div>
                        <h2> {this.props.problem.title}</h2>
                        <h2>
                            {
                                '#' + this.props.problem.keyWords
                            }
                        </h2>

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










// this.state.isEdited ?
//     <div>
//         <button
//             onClick={this.editToggle}
//         >
//             Canel
//     </button>
//         <input
//             type={'text'}
//             onChange={this.onProblemChangeHandler}
//             value={this.state.problemTitle}
//         />
//         <input
//             type={'text'}
//             onChange={this.onProblemChangeHandler}
//             value={this.state.problemDescription}
//         />
//         <input
//             type={'text'}
//             onChange={this.onProblemChangeHandler}
//             value={this.state.problemKeyWords}
//         />
//         <button
//             onClick={
//                 () => {
//                     this.props.onEditProblemHandler(
//                         this.props.problem.key,
//                         this.state.problemTitle,
//                         this.state.problem.description,
//                         this.state.problem.keyWords
//                     )
//                     this.editToggle()
//                 }
//             }
//         >
//             SAVE
//         </button>
//     </div>
//     :

{/* <h2> {this.props.problem.title}</h2>
                 <h2>{this.props.problem.description}</h2>
                   <h3>{this.state.problem.keyWords}</h3> 
                   
                    <button
                    onClick={this.editToggle}
                >
                    EDIT
                    </button>
                <button
                    onClick={this.deletedProblem}
                >
                    DELETE
                    </button>
                   
                   
                   
                   
                   
                   */}
{/* <List component="nav">
                    <ListItem button>
                    
                        <ListItemText
                            primary={this.props.problem.title}
                        />
                        <button
                    onClick={this.deletedProblem}
                >
                    DELETE
                    </button>
                    </ListItem>
                </List> */}