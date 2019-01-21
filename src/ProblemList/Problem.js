import React from 'react'
import PropTypes from 'prop-types'


class Problem extends React.Component {
    state = {
        isEdited: false,
        problemTitle: this.props.problem.title,
        problemKeyWords: this.props.problem.keyWords,
        problemDescription: this.props.problem.description
    }
    editToggle = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            problemTitle: this.props.problem.title,
            problemKeyWords: this.props.problem.keyWords,
            problemDescription: this.props.problem.description
        })

    }
    onProblemChangeHandler = (event) => {
        this.setState({
            problemTitle: this.props.problem.title,
            problemKeyWords: this.props.problem.keyWords,
            problemDescription: this.props.problem.description
        })
    }
    render() {
        return (
            this.state.isEdited ?
                <div>
                    <button
                        onClick={this.editToggle}
                    >
                        Canel
                </button>
                    <input
                        type={'text'}
                        onChange={this.onProblemChangeHandler}
                        value={this.state.problemTitle}
                    />
                    <input
                        type={'text'}
                        onChange={this.onProblemChangeHandler}
                        value={this.state.problemDescription}
                    />
                    <input
                        type={'text'}
                        onChange={this.onProblemChangeHandler}
                        value={this.state.problemKeyWords}
                    />
                    <button
                        onClick={
                            () => {
                                this.props.onEditProblemHandler(
                                    this.props.problem.key,
                                    this.state.problemTitle,
                                    this.state.problem.description,
                                    this.state.problem.keyWords
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
                    {this.props.problem.title}
                    <button
                        onClick={this.editToggle}
                    >
                        EDIT
                    </button>
                </div>
        )
    }
}

Problem.propTypes = {
    problem: PropTypes.object.isRequired
}
export default Problem