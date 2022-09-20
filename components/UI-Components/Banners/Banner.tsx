import React, { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledContainer = styled.div``;

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 700px;
  display: flex;
  width: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: min(400px, 100%);

  h1 {
    color: ${({ theme: { colors } }) => colors.white};
  }

  p {
    color: ${({ theme: { colors } }) => colors.white};
    margin-top: 32px;
  }
`;

type Props = {};

const Banner = (props: Props) => {
  return (
    <StyledContainer className="container flex-row">
      <StyledWrapper>
        <StyledSection>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </StyledSection>
        {/*     <div className="imageWrapper">
          <Image
            src="/assets/home/desktop/image-hero.jpg"
            width="700"
            height="300"
          />
        </div> */}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Banner;
