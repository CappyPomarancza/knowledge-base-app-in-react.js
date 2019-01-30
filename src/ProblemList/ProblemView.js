import React from 'react'
import MyPaper from './MyPaper'
import { Button } from '@material-ui/core'
import ShowMoreText from 'react-show-more-text'

const ProblemView = props => (
  <div>
    <MyPaper>
      <h1>  {props.problemTitle} </h1>
      <br />
      <h3> {props.problemKeyWords}</h3>
      <br />
      <p> {props.problemDescription.split('\n').map((el, key) => {
        return <div key={key}>{el}</div>
      })}
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={props.backClickHndler}
        fullWidth={true}
      >
        BACK
        </Button>
    </MyPaper>
  </div>
)
export default ProblemView