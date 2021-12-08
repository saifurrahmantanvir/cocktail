import React from 'react'
import { CategoryTags, QueryList, GoToQuery } from '../styledComponents/HistoryCategories.styles'

const HistoryCategories = function ({ category, search, searchHistory, fetchRecipes }) {
   return (
      <div>
         <CategoryTags>{category}</CategoryTags>
         <QueryList>
            {
               searchHistory[search].length
                  ? searchHistory[search].map(query => (
                     <li key={query}>
                        <GoToQuery onClick={() => fetchRecipes(query, search)}>{query}</GoToQuery>
                     </li>
                  ))
                  : null
            }
         </QueryList>
      </div>
   )
}

export default HistoryCategories