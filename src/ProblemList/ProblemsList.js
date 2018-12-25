import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../untils'
import Forms from './Forms'
//import Shearch from './Schearch'

//import { database } from '../firebaseConfig'

class ProblemsList extends React.Component {
    state = {
        problems: null,
        isLoadingProblems: false,
        newProblemTitle: '',
        searchPharse: '',
    }

    initProblemsSync = () => {
        this.setState({
            isLoadingProblems: true
        })
        database.ref(adresURl)
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

    newProblemChandlerHandler = (event) => {
        this.setState({
            newProblemTitle: event.target.value,
            newProblemKeyWords: event.target.value,
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

        fetch('https://to-do-list-aceb0.firebaseio.com/cappy-problems/.json',
            request)
            .then(response => {
                this.setState({
                    newProblemTitle: '',
                    newProblemDescription: '',
                    newProblemKeyWords: ''
                })
            })
    }
    onEditProblemHandler = (key, newTitle) => {
        database.ref(`cappy-problems/${key}`)
            .update({
                title: newTitle
            })
    }
    onShearchPharseChanged = (event) => {
        this.setState({
            searchPharse: event.target.value
        })
    }

    render(){
        const filteredProblems = this.state.problems && this.state.problems
        .filter(problem => problem.title.idexOf(this.state.searchPharse)!== -1)

        return(
            <div>
                {

                    'dupa'
                    // this.state.isLoadingProblems?
                    // <Loading />
                    // :
                    // this.state.problems ?
                    // <div>
                    //     <Forms 
                    //         newProblemTitle = {this.state.newProblemTitle}
                    //     />
                    // </div>
                }
            </div>
        )
    }


}
