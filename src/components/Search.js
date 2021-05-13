import React, { useState } from 'react';

const Search= ()=>{
    const [searchItem, updSearch]= useState("");

    const changed= (event)=>{
        updSearch(event.target.value);
    }

    return (
        <div className="container mt-5 d-flex flex-column align-items-center">
            <input type="text" name="search" id="search" value={searchItem} onChange={changed} placeholder="Live Search" autoComplete="off" className="mb-5 text-center" />
            <img src={(searchItem!=="")?`https://source.unsplash.com/560x350/?${searchItem}`:""} alt="" />
        </div>
    );
}

export default Search;