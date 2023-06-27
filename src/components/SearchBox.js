import React from 'react'

const SearchBox = ({ handleChange }) => {

    console.log("handleChange is: ", handleChange);

    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type="search" 
                placeholder="Search for a robot"
                onChange={handleChange}
            />    
        </div>
    )
}

export default SearchBox