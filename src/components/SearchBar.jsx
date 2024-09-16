import React from 'react'

const SearchBar = ({textInput, setTextInput}) => {
  return (
    <>
    <input
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
    />
    </>
  )
}

export default SearchBar