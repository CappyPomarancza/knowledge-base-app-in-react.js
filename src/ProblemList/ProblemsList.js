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

    newProblemChandler = (event) => {
        this.setState({
            newProblemTitle: event.target.value,
            newProblemKeyWords: event.target.value,
            newProblemDescription: event.target.value
        })
    }



}
