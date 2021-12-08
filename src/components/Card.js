import React from 'react'

import {
   CardContainer,
   ImageContainer,
   Image,
   RecipeName
} from '../styledComponents/Card.styles'

const Card = function ({ recipe }) {
   return (
      <CardContainer>
         <ImageContainer>
            <Image src={recipe.strDrinkThumb} alt='' />
         </ImageContainer>

         <RecipeName>{recipe.strDrink}</RecipeName>
      </CardContainer>
   )
}

export default Card
