import React from 'react'

import { useHistoryContext } from '../components/contexts/HistoryContext'

const searchCache = {
   ingredient: {},
   name: {},
   category: {},
   alcoholic: {}
};

const useSearchHook = function () {
   const [, setSearchHistory] = useHistoryContext();
   const [recipes, setRecipes] = React.useState([]);
   const [error, setError] = React.useState('');

   const fetchRecipes = async function (query, search) {
      const url = search === 'name' ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
         : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${search[0]}=${query}`;

      if (searchCache[search][query]) {
         setRecipes(searchCache[search][query]);
      } else {
         try {
            const fetchRecipes = await fetch(url);
            const jsonRecipes = await fetchRecipes.json();

            searchCache[search][query] = jsonRecipes.drinks;

            setRecipes(jsonRecipes.drinks || []);

            if (!jsonRecipes.drinks)
               return;

            setSearchHistory({ type: search, query });
         } catch (error) {
            setRecipes([]);
            setError('No recipes found with the search!');
         }
      }
   }

   React.useEffect(() => {
      fetchRecipes('Grapefruit juice', 'ingredient');

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return { recipes, fetchRecipes, error, setError }
}

export default useSearchHook