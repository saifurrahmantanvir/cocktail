import styled from "styled-components";

export const GuideContainer = styled.div`
   max-width: 110rem;
   margin: 0 auto;
   padding: 0 5rem;

   & > * {
      margin-bottom: 5rem;
   }

   & > *:first-child {
      margin: 2rem 5rem 5rem;
   }

   /* @media only screen and (max-width: 31.25em) {
      padding: 0 3rem;
   } */
`

export const Description = styled.p`
   font-size: 2.2rem;
   letter-spacing: -1px;
   line-height: 1.5;
`

export const AvailableQueries = styled.div`
   display: grid;
   grid-gap: 2rem;
   grid-template-columns: repeat(10, minmax(min-content, 10rem));
   justify-content: center;
   text-align: left;

   @media only screen and (max-width: 31.25em) {
      grid-row-gap: 5rem;
   }
`

export const AvailableNames = styled.div`
   grid-column: 1 / span 5;

   @media only screen and (max-width: 31.25em) {
      grid-column: 1 / -1;
   }
`

export const AvailableIngredients = styled.div`
   grid-column: 6 / span 5;

   @media only screen and (max-width: 31.25em) {
      grid-column: 1 / -1;
   }
`

export const ListHeading = styled.h3`
   min-height: 8rem;

   @media only screen and (max-width: 31.25em) {
      min-height: 6.5rem;
   }
`

export const List = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`

export const Item = styled.li`
   font-size: 2rem;
   letter-spacing: -1px;
   padding-left: 2rem;
   margin-bottom: 1rem;
   flex: 0 0 50%;
`