import React from 'react'
import MyPaper from './MyPaper'
import { Button } from '@material-ui/core'

const ProblemView = props => (
  <div>
    <MyPaper>
      <h1> Title:  {props.problemTitle} </h1>
      <br />
      <h3> KeyWords: {props.problemKeyWords}</h3>
      <br />
      <h3>Solution:</h3>
      <p>  {props.problemDescription.split('\n').map((el, key) => {
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