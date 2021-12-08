import React from 'react'

let categoriesCache = [];

const useCategoryHook = function () {
   const [categories, setCategories] = React.useState([]);

   const fetchCategories = async function () {
      if (categoriesCache.length) {
         setCategories(categoriesCache);
      } else {
         const fetchCategories = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');

         const jsonCategories = await fetchCategories.json();
         categoriesCache = jsonCategories.drinks;

         setCategories(jsonCategories.drinks);
      }
   }

   React.useEffect(() => {
      fetchCategories();

   }, [])

   return { categories, setCategories }
}

export default useCategoryHook