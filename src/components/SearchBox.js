import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa3 pb5">
      <input
        className="pa3 ba b--green bg-lightest-blue br4 tc f4" 
        type="search" 
        placeholder="search robots"
        onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
