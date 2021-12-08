import styled from "styled-components";

export const Input = styled.input`
   width: 30rem;
   font-size: 2rem;
   padding: 0.8rem;
   letter-spacing: -1px;

   @media only screen and (max-width: 62.5em) {
      width: 35rem;
   }
   @media only screen and (max-width: 40.625em) {
      width: 30rem;
   }
   @media only screen and (max-width: 23.125em) {
      width: 100%;
      flex: 0 0 100%;
   }
`

export const CategorySelector = styled.select`
   width: 20rem;
   font-size: 1.8rem;
   padding: 0.8rem;
`

export const CategoryLabel = styled.label`
   font-size: 2rem;
   letter-spacing: -1px;
`