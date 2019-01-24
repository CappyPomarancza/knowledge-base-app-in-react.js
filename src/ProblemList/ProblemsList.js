import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../untils'
import Forms from './Forms'
import Search from './Search'
import MyPaper from './MyPaper'

import { database } from '../firebaseConfig'
import Problem from './Problem';

class ProblemsList extends React.Component {
    state = {
        problems: null,
        isLoadingProblems: false,
        newProblemTitle: '',
        newProblemDescription: '',
        newProblemKeyWords: '',
        searchPhrase: '',
    }

    //componentDidMount
    initProblemsSync = () => {
        this.setState({
            isLoadingProblems: true
        })
        console.log('problems are loading')
        database.ref('/cappy-problems')
            .on(
                'value',
                snapshot => {
                    const data = snapshot.val()
                    this.setState({
                        problems: mapObjectToArray(data),
                        isLoadingProblems: false,

                    })

                }
            )
        console.log(this.state.problems)
        console.log('problems shoud be loaded')
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
        console.log(this.state.newProblemTitle)
        console.log(this.state.newProblemDescription)
        console.log(this.state.newProblemKeyWords)

        fetch('https://todo-e8a15.firebaseio.com/cappy-problems/.json'
            , request)
            .then(response => {
                this.setState({
                    newProblemTitle: '',
                    newProblemDescription: '',
                    newProblemKeyWords: ''
                })
                console.log('test')

            })
    }
    onEditProblemHandler = (key, newTitle) => {
        database.ref(`cappy-problems/${key}`)
            .update({
                title: newTitle
            })
    }
    onSearchPhraseChanged = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {

        const ProblemsList = this.state.problems && this.state.problems.map(el => el)

        console.log(ProblemsList)
        console.log(this.state.problems)
        const filteredProblems = this.state.problems && this.state.problems 
        .filter(problem => problem.title.indexOf(this.state.searchPhrase) !== -1)


        return (
            <MyPaper>
                {
                    this.state.isLoadingProblems ?
                        <Loading />
                        :
                        this.state.problems ?
                            <div>
                                <Forms
                                    newProblemTitle={this.state.newProblemTitle}
                                    newProblemDescription={this.state.newProblemDescription}
                                    newProblemKeyWords={this.state.newProblemKeyWords}

                                    newProblemDescriptionChangeHandler={this.newProblemDescriptionChangeHandler}
                                    newProblemKeyWordsChangeHandler={this.newProblemKeyWordsChangeHandler}
                                    newProblemTitleChangeHandler={this.newProblemTitleChangeHandler}
                                    onAddNewProblemClick={this.onAddNewProblemClick}
                                />
                                <Search
                                    searchPhrase={this.state.searchPhrase}
                                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                                />
                                <List
                                    onEditProblemHandler={this.state.onEditProblemHandler}

                                    problems={filteredProblems}
                                />
                            </div>
                            :
                            <Default
                                clickHandler={this.initProblemsSync}
                                label={'Download Problems List from Firebase'}
                            />
                }
            </MyPaper>
        )
    }


}

export default ProblemsList



// {


//     this.state.isLoadingProblems ?
//         <Loading />
//         &&
//         <Forms
//             newProblemTitle={this.state.newProblemTitle}
//             newProblemChangeHandler={this.newProblemChangeHandler}
//             onAddNewProblemClick={this.onAddNewProblemClick}
//         />
//         :
//         this.state.problems ?
//             <div>
//                 <Forms
//                     newProblemTitle={this.state.newProblemTitle}
//                     newProblemChangeHandler={this.newProblemChangeHandler}
//                     onAddNewProblemClick={this.onAddNewProblemClick}
//                 />
//                 <Search
//                     searchPhrase={this.state.searchPhrase}
//                     onSearchPhraseChanged={this.onSearchPhraseChanged}
//                 />
//                 <List
//                     onEditProblemHandler={this.state.onEditProblemHandler}

//                    problems={filteredProblems ? filteredProblems : filteredProblems}
//                 />
//             </div>
//             :
//             <Default
//                 clickHandler={this.initProblemsSync}
//                 label={'Click! dont be shy '}
//             />
// }