import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftArrowImg = styled.img`
  
   margin-right: 23px ;
  
`;

export const RightArrowImg = styled.img`
   
    margin-left: 23px;
  
`;

export const DefaultCircle = styled.div`
   width: 35px;
   height: 35px;
   border-radius: 50%;
   border: 1px solid ${theme.colors.blueLink};
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${theme.colors.black};
   font-family: ${theme.fonts.inter.regular};
   font-size: 16px;
   font-style: normal;
   line-height: 0.93 ;
   font-weight: 400;
`;