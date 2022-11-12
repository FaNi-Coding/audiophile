import React, { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../styles/device";

const StyledWrapper = styled.div`
  height: 79rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(40rem, 100%);
  text-align: center;

  h1 {
    color: ${({ theme: { colors } }) => colors.white};
  }

  p {
    color: ${({ theme: { colors } }) => colors.white};
    margin-top: 3.2rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media ${device.laptop} {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

type Props = {
  component: ReactNode;
};

const Banner = ({ component }: Props) => {
  return (
    <div className="container">
      <StyledWrapper>
        <StyledSection>
          <h1>XX99 Mark II Headphones</h1>
          <h3>This is from production!</h3>
          <p>
            experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {component && component}
        </StyledSection>
      </StyledWrapper>
    </div>
  );
};

export default Banner;
