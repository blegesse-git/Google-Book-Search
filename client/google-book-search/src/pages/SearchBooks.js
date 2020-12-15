import React, { useState} from 'react'
import API from "../utils/api";

function SearchBooks() {

    const [input, setInput] = useState("")

    const handleInputChange = event => {
        
    }
    
    return (
        <div>
            <form>
                <input type="text"  onChange={handleInputChange}></input>
                <input type="submit" value="submit" onSubmit={handleSubmit}/>
            </form>
        </div>
    )
}
export default SearchBooks