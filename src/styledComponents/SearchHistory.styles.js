import styled from "styled-components"

export const SearchHistoryContainer = styled.div`
   grid-column: col-start 8 / full-end;
   grid-row: 2 / 3;
   text-align: start;
   padding: 1rem;
   background-color: #fdd6ba;

   @media only screen and (max-width: 53.125em) {
      position: fixed;
      inset: 0 0 0 50%;
      padding-top: 8rem;
      transform: ${({ viewHistory }) => viewHistory ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.4s ease-out;
   }
`

export const HistoryTitle = styled.p`
   font-size: 2.8rem;
   font-weight: bold;
   letter-spacing: -1px;
   line-height: 1.2;
   text-align: center;
   margin-bottom: 5rem;
`

export const Close = styled.button`
   display: none;
   position: absolute;
   padding: 2rem;
   font-size: 6rem;
   top: -1rem;
   right: 1rem;

   @media only screen and (max-width: 53.125em) {
      display: inline-block;
   }
`
