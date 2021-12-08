import React from 'react'
import { SearchHistoryContainer, HistoryTitle, Close } from '../styledComponents/SearchHistory.styles'

import HistoryCategories from './HistoryCategories'

const SearchHistory = function ({ searchHistory, fetchRecipes, viewHistory, toggleHistory }) {
   return (
      <SearchHistoryContainer viewHistory={viewHistory}>
         <HistoryTitle>SearchHistory</HistoryTitle>
         <Close onClick={toggleHistory}>&times;</Close>

         <HistoryCategories
            category={'Name'} search={'name'}
            searchHistory={searchHistory} fetchRecipes={fetchRecipes} />

         <HistoryCategories
            category={'Ingredient'} search={'ingredient'}
            searchHistory={searchHistory} fetchRecipes={fetchRecipes} />

         <HistoryCategories
            category={'Category'} search={'category'}
            searchHistory={searchHistory} fetchRecipes={fetchRecipes} />

         <HistoryCategories
            category={'Alcoholic'} search={'alcoholic'}
            searchHistory={searchHistory} fetchRecipes={fetchRecipes} />
      </SearchHistoryContainer>
   )
}

export default SearchHistory