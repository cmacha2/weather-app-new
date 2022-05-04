import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search city" aria-label="Search" value={city} onChange={e => setCity(e.target.value)}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  );
}



// c170e58fb664eca0034348c8a285eb15