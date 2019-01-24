import React from 'react'
import TextField from '@material-ui/core/TextField'
const Search = (props) => (
    <TextField
    label="Search"
        placeholder={'Search'}
        fullWidth={true}
        margin='normal'
        value={props.searchPhrase}
        onChange={props.onSearchPhraseChanged}
    />
)
 export default Search