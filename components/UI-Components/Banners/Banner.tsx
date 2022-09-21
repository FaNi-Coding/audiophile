import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled.div``;

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 79rem;
  display: flex;
  width: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: min(40rem, 100%);
  z-index: 500;

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
`;

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="container">
      <StyledWrapper>
        <StyledSection>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </StyledSection>
      </StyledWrapper>
    </div>
  );
};

export default Banner;
