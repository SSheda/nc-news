import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

function Search({ setSearch }) {
    const [input, setInput] = useState("")

    const HandleChange = (event) => {
        setInput(event.target.value)
    }

    const HandleSubmit = (event) => {
        event.preventDefault()
        setSearch(input)
        setInput("")
    }

    return (
        <form id="search" onSubmit={HandleSubmit}>
            <input type="text" value={input} placeholder="Search.." name="search" id="search_bar" onChange={HandleChange} />
            <button type="submit">
                    <i className='searchIcon'>
                        <FontAwesomeIcon icon={faSearch} />
                    </i>
            </button>
        </form>
    )
}

export default Search;