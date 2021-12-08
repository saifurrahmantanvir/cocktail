import styled from "styled-components";

export const HomeContainer = styled.div`
min-height: 100vh;
   display: grid;
   grid-template-columns: [full-start] 
                              minmax(8rem, 1fr)
                           [center-start]
                              repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
                           [center-end]
                              minmax(8rem, 1fr)
                           [full-end];

   grid-template-rows: min-content;
`

export const Navbar = styled.nav`
   grid-column: full-start / full-end;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 2rem;
   margin: 0 5rem;
   min-height: 10rem;

   @media only screen and (max-width: 76em) {
      align-items: start;
      margin: 2rem 5rem;
   }

   @media only screen and (max-width: 40.625em) {
      flex-wrap: wrap;
      margin: 2rem 3rem;
   }
`

export const Logo = styled.h1`
   display: inline-block;
   color: transparent;
   font-size: 5rem;
   /* background-image: linear-gradient(to left, #ff922b, #e50000 70%);
   -webkit-background-clip: text;
   background-clip: text; */
   color: #ed6e3a;
`

export const Form = styled.form`
   flex: 0 0 65%;

   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
   
   & > * {
      display: flex;
      align-items: center;
      gap: 1rem;
   }
   
   @media only screen and (max-width: 76em) {
      flex: 0 0 55%;
      justify-content: center;
   }

   @media only screen and (max-width: 62.5em) {
      flex: 0 0 50%;
   }

   @media only screen and (max-width: 40.625em) {
      order: 1;
      flex: 0 0 100%;
      gap: 1rem;
   }

   @media only screen and (max-width: 23.125em) {
      justify-content: start;
      
      & > *:not(:nth-child(2)) {
         width: 100%;
         justify-content: start;
      }
   }
`

export const SearchLabel = styled.label`
   font-size: 2rem;
   letter-spacing: -1px;
`

export const Submit = styled.button`
   /* background: linear-gradient(to left, #ff922b, #e50000); */
   background: #ed6e3a;
   margin-right: auto;
   
   @media only screen and (max-width: 76em) {
      margin: 0;
   }
   
   @media only screen and (max-width: 23.125em) {
      order: 1;
   }
`

export const TypeSelector = styled.select`
   font-size: 1.8rem;
   padding: 0.8rem;
   width: 15rem;
`

export const NavCta = styled.div`
   text-align: end;

   @media only screen and (max-width: 40.625em) {
      display: flex;
      gap: 2rem;
   }

   @media only screen and (max-width: 31.25em) {
      display: block;
   }
`

export const Guide = styled.button`
   background: #ed6e3a;
`

export const History = styled.button`
   background: #ed6e3a;
   display: none;
   margin-bottom: 1rem;

   @media only screen and (max-width: 53.125em) {
      display: block;
   }

   @media only screen and (max-width: 40.625em) {
      margin: 0;
   }

   @media only screen and (max-width: 31.25em) {
      margin-bottom: 5px;
   }
`