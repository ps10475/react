import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([])

  useEffect(() => {
    fetch('https://react-hook-3ea58.firebaseio.com/ingredients.json')
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        const baseData = [];
        for (let key in responseData) {
          baseData.push({
            id: key,
            username: responseData[key].username,
            amount: responseData[key].amount
          })
        }
        setUserIngredients(baseData)
      })
  }, [])

  const getIngredients = (value) => {
    fetch('https://react-hook-3ea58.firebaseio.com/ingredients.json', {
      method: "POST",
      body: JSON.stringify(value),
      // headers: {"Content-Type":"Application.json"}
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevState => [
        ...prevState,
        {
          id: responseData.name,
          ...value
        }
      ])
    })

  }
  const removeItemHandle = (id) => {
    fetch(`https://react-hook-3ea58.firebaseio.com/ingredients/${id}.json`, {
      method: "DELETE"
    })
      .then(response => {
        setUserIngredients(prevState =>
          prevState.filter(ing => ing.id !== id)
        )
      })


  }

  const filterHandle = useCallback(value => {
    console.log(value);
    setUserIngredients(value)
  }, [])

  return (
    <div className="App">
      <IngredientForm propsIngredient={getIngredients} />

      <section>
        <Search userFiltedData={filterHandle} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandle} />
      </section>
    </div>
  );
}

export default Ingredients;
