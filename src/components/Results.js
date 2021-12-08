import React from 'react'
import { Link } from 'react-router-dom';

import { ResultsContainer, ResultsTitle, Recipes, ErrorMessage } from '../styledComponents/Results.styles';

import Card from './Card'

const Results = function ({ recipes, search, error }) {
   return (
      <ResultsContainer>
         <ResultsTitle>
            Showing results by <span>{search}</span>
         </ResultsTitle>

         <Recipes>
            {
               recipes.length ? recipes.map(recipe => (
                  <Link to={`/${recipe.idDrink}`} key={recipe.idDrink}>
                     <Card recipe={recipe} />
                  </Link>
               )) : <ErrorMessage>{error}</ErrorMessage>
            }
         </Recipes>
      </ResultsContainer>
   )
}

export default Results