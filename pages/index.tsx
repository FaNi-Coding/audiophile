import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI-Components/Buttons/Button";
import Input from "../components/UI-Components/Inputs/Input";

const StyledDiv = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Button primary>SEE PRODUCT</Button>
      <Button outlined>SEE PRODUCT</Button>
      <Button secondary>SHOP</Button>
      <Input name="Name" type="email" />
      <Input type="radio" value="e-Money" />
    </Layout>
  );
};

export default Home;
