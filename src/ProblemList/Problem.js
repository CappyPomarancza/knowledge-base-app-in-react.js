import React from 'react'



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
                <div>
                   <h2> {this.props.problem.title}</h2>

                   {/* <h2>{this.props.problem.description}</h2>
                   <h3>{this.state.problem.keyWords}</h3> */}
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
                </div>
        )
    }
}

export default Problem