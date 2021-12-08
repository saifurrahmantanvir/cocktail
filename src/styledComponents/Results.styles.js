import styled from "styled-components";

export const ResultsContainer = styled.div`
   grid-column: full-start / col-end 7;
   grid-row: 3 / -1;
   border-top: 1px dashed #fdd6ba;
   
   @media only screen and (max-width: 53.125em) {
      grid-column: full-start / full-end;
   }
`

export const ResultsTitle = styled.p`
   grid-column: full-start / col-end 7;
   grid-row: 2 / 3;
   font-size: 2rem;
   letter-spacing: -1px;
   padding-top: 2rem;
   margin-bottom: 5rem;

   & span {
      font-size: 3rem;
      font-weight: bold;
   }

   @media only screen and (max-width: 53.125em) {
      grid-column: full-start / full-end;
   }
`

export const Recipes = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, 20rem);
   grid-gap: 5.5rem 4rem;
   justify-content: center;
   margin: 0 5rem;
   padding-bottom: 10rem;

   @media only screen and (max-width: 53.125em) {
      grid-template-columns: repeat(auto-fit, 18rem);
      grid-gap: 5.5rem 3rem;
   }

   @media only screen and (max-width: 40.625em) {
      margin: 0 3rem;
   }

   @media only screen and (max-width: 31.25em) {
      grid-template-columns: repeat(auto-fit, 18rem);
   }
`

export const ErrorMessage = styled.h3`
   grid-column: 2 / span 4;
`