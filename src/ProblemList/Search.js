import React from 'react'
import TextField from '@material-ui/core/TextField'
const Search = (props) => (
    <TextField
    label={props.label}
        placeholder={props.placeholder}
        fullWidth={true}
        margin='normal'
        value={props.searchPhrase}
        onChange={props.onSearchPhraseChanged}
    />
)
 export default Search