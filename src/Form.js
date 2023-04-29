import React from 'react';
import './App.css'

function Form({ onChange, onSubmit, value }) {
    return (
        <form className='search-form' onSubmit={onSubmit}>
            <input
                placeholder='Enter the @username'
                type='text'
                onChange={onChange}
                value={value}
            />
            <button>Search</button>
        </form>
    )
}
export default Form;