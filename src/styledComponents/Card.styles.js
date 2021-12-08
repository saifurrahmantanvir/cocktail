import styled from "styled-components"

export const CardContainer = styled.div`
   display: grid;
   grid-template-rows: repeat(2, min-content);
   background-color: #fff;
`

export const ImageContainer = styled.figure`
   grid-column: 1 / -1;
   grid-row: 1 / -1;
`

export const Image = styled.img`
   height: 100%;
   width: 100%;
   aspect-ratio: 1;
`

export const RecipeName = styled.h3`
   grid-column: 1 / -1;
   grid-row: 2 / -1;
   justify-self: center;
   background-color:#fdd6ba;
   padding: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   transform: translateY(25px);
`
