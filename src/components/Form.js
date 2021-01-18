import React from 'react'

const Form = ({getSearch, search, updateSearch}) => {

    return (
        <div className="formWrap">
            <h1>Recipe App</h1>
            <form 
                onSubmit={getSearch} 
                className="search-form"
            >
                <input 
                    className="search-bar" 
                    type="text" 
                    value={search} 
                    onChange={updateSearch}
                    placeholder="Search recipes by ingredients"
                />
                <button 
                    className="search-button" 
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Form