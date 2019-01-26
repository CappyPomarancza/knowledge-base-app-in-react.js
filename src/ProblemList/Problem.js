import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { EditorVerticalAlignTop } from 'material-ui/svg-icons';




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
            problemDescription: this.props.problem.description
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
    render() {
        console.log(this.state.problemTitle)
        console.log(this.state.problemDescription)
        console.log(this.state.problemKeyWords)
        return (

            <div>
                {this.state.isEdited ?
                    <div>
                        <button
                            onClick={this.editToggle}
                        >
                            Canel
                     </button>
                        <input
                            type={'text'}
                            onChange={this.onProblemTitleChangeHandler}
                            value={this.state.problemTitle}
                        />
                        <input
                            type={'text'}
                            onChange={this.onProblemDescriptionChangeHandler}
                            value={this.state.problemDescription}
                        />
                        <input
                            type={'text'}
                            onChange={this.onProblemKeyWordsChangeHandler}
                            value={this.state.problemKeyWords}
                        />
                        <button
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
                            SAVE
                        </button>
                    </div>
                    :
                    <div>
                        <h2> {this.props.problem.title}</h2>
                        <h2>
                            {
                                '#' + this.props.problem.keyWords
                            }
                        </h2>


                        <button
                            onClick={this.editToggle}
                        >
                            EDIT
                    </button>
                        <button

                        >
                            DELETE
                    </button>
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