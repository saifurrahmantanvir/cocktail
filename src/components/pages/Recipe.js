import React from 'react'
import { useParams } from 'react-router-dom';

import {
   RecipeDetails, Figure, Image, Details, RecipeName, InstructionContainer,
   Title, Instruction, List, ListItem, Tag
} from '../../styledComponents/Recipe.styles';

import useRecipeHook from '../../hooks/useRecipeHook'

const Recipe = function () {
   let { id } = useParams();
   const { recipe } = useRecipeHook(id);

   const getIngredients = (item) => {
      const ingredients = [];

      for (let i = 1; i <= 15; i++) {
         if (!item['strIngredient' + i] && !item['strMeasure' + i])
            continue;

         ingredients.push(
            [item['strIngredient' + i], item['strMeasure' + i]]
         );
      }
      return ingredients;
   }

   return (
      <React.Fragment>
         {
            recipe ? recipe.drinks.map(item => (
               <RecipeDetails key={item.idDrink}>
                  <Figure>
                     <Image src={item.strDrinkThumb} alt='' />
                  </Figure>

                  <Details>
                     <RecipeName>{item.strDrink}</RecipeName>

                     <Tag>Category - <span>{item.strCategory}</span></Tag>
                     <Tag>Alcoholic - <span>{item.strAlcoholic}</span></Tag>
                  </Details>

                  <InstructionContainer>
                     <Title>Instruction</Title>
                     <Instruction>{item.strInstructions}</Instruction>
                  </InstructionContainer>

                  <List>
                     <ListItem>
                        <Title>Ingredients</Title>
                        <Title>Quantity</Title>
                     </ListItem>
                     {
                        getIngredients(item).map(([ingName, ingMeasure], index) => (
                           <ListItem key={index}>
                              <span>{ingName}</span>
                              <span>{ingMeasure}</span>
                           </ListItem>
                        ))
                     }
                  </List>
               </RecipeDetails>
            )) : null
         }
      </React.Fragment>

   )
}

export default Recipe