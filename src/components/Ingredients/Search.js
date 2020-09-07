import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { userFiltedData } = props;
  const inputRef = useRef();
  const [userFilter, setUserFilter] = useState('');

  useEffect(() => { 
    const timer = setTimeout(() => {
      const query = userFilter.length === 0
        ? ""
        : `?orderBy="username"&equalTo="${userFilter}"`;
      fetch('https://react-hook-3ea58.firebaseio.com/ingredients.json' + query)
        .then(response => {
          return response.json()
        })
        .then(responseData => {
          const data = [];
          for (let key in responseData) {
            data.push({
              id: key,
              username: responseData[key].username,
              amount: responseData[key].amount
            })
          }
          userFiltedData(data)
        })
    }, 300)
    return ()=>{
      clearTimeout(timer)
    }
  }, [userFilter, userFiltedData, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={userFilter}
            onChange={event => setUserFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
