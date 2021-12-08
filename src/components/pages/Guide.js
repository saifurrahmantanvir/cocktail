import React from 'react'

import { GuideContainer, Description, AvailableQueries, AvailableNames, AvailableIngredients, ListHeading, List, Item } from '../../styledComponents/Guide.styles'
import { Logo } from '../../styledComponents/Home.styles'

const availableNames = [
   'Orange', 'Margarita', 'Martini', 'Ginger', 'Champagne', 'Lime', 'Rum', 'French', 'Bourbon', 'Lemon', 'Apple', 'Pineapple',
   'Coffee', 'Vodka', 'Whiskey', 'Egg', 'Gin', 'Tequila', 'Peach',
   'Raspberry', 'Beer', 'Wine', 'Malibu',
   'Strawberry', 'Watermelon', 'Cranberry', 'Coconut', 'Negroni', 'Amaretto', 'Brandy'
];

const availableIngredients = [
   'Light rum', 'Applejack', 'Dark rum', 'Sweet Vermouth', 'Strawberry schnapps', 'Scotch',
   'Triple sec', 'Lemon vodka', 'Blended whiskey', 'Dry Vermouth', 'Amaretto', 'Tea',
   'Champagne', 'Coffee liqueur', 'Bourbon', 'Tequila', 'Vodka', 'Bitters', 'Sugar', 'Kahlua', 'demerara Sugar',
   'Watermelon', 'Lime juice', 'Irish whiskey', 'Apple brandy', 'Carbonated water', 'Cherry brandy',
   'Grenadine', 'Port', 'Coffee brandy', 'Red wine', 'Rum', 'Grapefruit juice', 'Ricard',
   'Apple juice', 'Pineapple juice', 'Lemon juice', 'Sugar syrup', 'Milk', 'Strawberries',
   'Chocolate syrup', 'Yoghurt', 'Mango', 'Ginger', 'Lime', 'Berries', 'Grapes', 'Tomato juice',
   'Cocoa powder', 'Chocolate', 'Peach Vodka', 'Spiced rum', 'Cranberries', 'Apple cider', 'Cranberry juice',
   'Egg yolk', 'Egg', 'Grape juice', 'Lemon', 'Lager', 'Chocolate liqueur', 'Blackberry brandy'
]

const Guide = function () {
   return (
      <GuideContainer>
         <Logo>Cocktail</Logo>

         <Description>
            Cocktail is a drink recipe app. It has over 1500+ recipes included.
            You can search for recipes by recipe name, ingredient.
            Also you can filter recipes by category & alcoholic.
         </Description>

         <AvailableQueries>
            <AvailableNames>
               <ListHeading>
                  Try searching for recipes by these names -
               </ListHeading>
               <List>
                  {
                     availableNames.map((item, i) => (
                        <Item key={i}>{item}</Item>
                     ))
                  }
               </List>
            </AvailableNames>

            <AvailableIngredients>
               <ListHeading>
                  Try searching for recipes by these ingredient names -
               </ListHeading>
               <List>
                  {
                     availableIngredients.map((item, i) => (
                        <Item key={i}>{item}</Item>
                     ))
                  }
               </List>
            </AvailableIngredients>
         </AvailableQueries>
      </GuideContainer>
   )
}

export default Guide