import type { NextPage } from "next";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return <StyledDiv>hello</StyledDiv>;
};

export default Home;
