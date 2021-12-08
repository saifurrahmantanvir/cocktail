import styled from "styled-components";

export const RecipeDetails = styled.div`
   display: grid;
   grid-template-columns: repeat(2, minmax(max-content, 50rem));
   grid-gap: 5rem 3rem;
   justify-content: center;
   margin: 10rem;

   @media only screen and (max-width: 40.625em) {
      margin: 5rem;
   }

   @media only screen and (max-width: 23.125em) {
      margin: 3rem 0;
      grid-gap: 3rem 0;
   }
`

export const Figure = styled.figure`
   justify-self: center;
   display: inline-block;
   height: 28rem;
   position: relative;

   &::before {
      display: inline-block;
      content: "";
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      height: 100%;
      width: 100%;
      z-index: -1;
      border: 1px solid #ffa754;
   }

   &::after {
      display: inline-block;
      content: "";
      position: absolute;
      bottom: 1.5rem;
      left: -1.5rem;
      height: 100%;
      width: 100%;
      z-index: -1;
      border: 1px solid #ffa754;
   }

   @media only screen and (max-width: 53.125em) {
      height: 25rem;
   }

   @media only screen and (max-width: 40.625em) {
      grid-column: 1 / -1;
      margin-bottom: 2rem;
   }
`

export const Image = styled.img`
   height: 100%;
   aspect-ratio: 1;
   border-radius: 2px;
   box-shadow: 1rem 1rem 3rem rgb(0 0 0 / 0.15);
`

export const Details = styled.div`
   align-self: center;
   justify-self: start;
   display: grid;
   grid-gap: 2rem;

   @media only screen and (max-width: 40.625em) {
      grid-column: 1 / -1;
      justify-self: center;
   }
`

export const RecipeName = styled.h2`
   text-align: start;
   letter-spacing: -1px;

   @media only screen and (max-width: 23.125em) {
      font-size: 3rem;
   }
`

export const Tag = styled.h4`
   text-align: start;
   font-size: 2rem;
   
   & span {
      padding: 0.5rem;
      background-color: #ffa754;
      border-radius: 0.5rem;
   }
`

export const InstructionContainer = styled.div`
   grid-column: 1 / -1;
   justify-self: center;

`
export const Title = styled.h3`
   font-size: 3rem;
   margin: 3rem 0 2rem;
`

export const Instruction = styled.p`
   max-width: 80rem;
   margin: 0 auto;
   font-size: 2.2rem;
   letter-spacing: -1px;

   
   @media only screen and (max-width: 40.625em) {
      max-width: 51rem;
      padding: 0 2rem;
   }

   @media only screen and (max-width: 23.125em) {
      max-width: 42rem;
      padding: 0;
   }
`

export const List = styled.ul`
   grid-column: 1 / -1;
   justify-self: center;
   list-style: none;
   margin: 0 auto;
   max-width: 50rem;

   @media only screen and (max-width: 31.25em) {
      & > *:not(:first-child) {
         font-size: 2.5rem;
      }
   }
`

export const ListItem = styled.li`
   display: flex;
   gap: 15rem;
   justify-content: space-between;
   font-size: 20px;
   margin-bottom: 10px;
   letter-spacing: -1px;
   font-weight: 400;

   @media only screen and (max-width: 31.25em) {
      gap: 10rem;
   }
`