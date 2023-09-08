import React from 'react'
import { useState } from 'react';

export default function Search({handleSubmit}) {
  const[searchTerm, setSearchTerm] = useState('')
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    handleSubmit(searchTerm);
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div>Search
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  )
}
