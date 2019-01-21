import React from 'react'

const Search = (props) => (
    <input 
        placeholder={'Search'}
        value={props.searchPhrase}
        onChange={props.onShearchPhraseChanged}
    />
)
 export default Search