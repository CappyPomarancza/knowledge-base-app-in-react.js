import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../untils'
import Search from './Search'
import MyPaper from './MyPaper'

import { database } from '../firebaseConfig'

class ProblemsList extends React.Component {
    state = {
        problems: null,
        isLoadingProblems: false,
        newProblemTitle: '',
        newProblemDescription: '',
        newProblemKeyWords: '',
        searchPhrase: '',
    }

    componentDidMount = () => {
        this.setState({
            isLoadingProblems: true
        })
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
    }

    onEditProblemHandler = (key, newTitle, newDescription, newKeyWords) => {

        const request = {
            method: 'PATCH',
            body: JSON.stringify({
                title: newTitle,
                description: newDescription,
                keyWords: newKeyWords
            })
        }

        return fetch(`https://todo-e8a15.firebaseio.com/cappy-problems/${key}/.json`
            , request
        )
    }
    onSearchPhraseChanged = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }


    render() {

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
                                <Search
                                    searchPhrase={this.state.searchPhrase}
                                    onSearchPhraseChanged={this.onSearchPhraseChanged}
                                />
                                <List
                                    onEditProblemHandler={this.onEditProblemHandler}
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