import React from "react";
import styled from "styled-components";
import { device } from "../../styles/device";

type Props = {
  children: React.ReactNode;
};

const StyledMain = styled.main`
  /*   margin: 0 auto;
     padding: 20px;
     max-width: ${(props) => props.theme.breakpoints.mobileL};


     // Tablet
     @media ${device.tablet} {
          margin:0 auto;
          max-width: ${(props) => props.theme.breakpoints.tablet};
     }
     // Laptop
     @media ${device.laptopL} {
          margin:0 auto;
          max-width: ${(props) => props.theme.breakpoints.laptopL};
     } */
`;

const Main = (props: Props) => {
  return <StyledMain>{props.children}</StyledMain>;
};

export default Main;
