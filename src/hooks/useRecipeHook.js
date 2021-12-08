import React from 'react'

const recipeCache = {};

const useRecipeHook = function (id) {
   const [recipe, setRecipe] = React.useState(null);

   const fetchItem = async function (id) {
      if (recipeCache[id]) {
         setRecipe(recipeCache[id])
      } else {
         const fetchRecipe = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

         const jsonRecipe = await fetchRecipe.json();
         recipeCache[id] = jsonRecipe;

         setRecipe(jsonRecipe);
      }
   }

   React.useEffect(() => {
      fetchItem(id);

   }, [id])

   return { recipe }
}

export default useRecipeHook