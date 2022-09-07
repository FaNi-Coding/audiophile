import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const StyledDiv = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <Layout title={""} description={""} keywords={""}>
      <Button primary>SEE PRODUCT</Button>
      <Button outlined>SEE PRODUCT</Button>

      <Input name="name" type={"text"} />
    </Layout>
  );
};

export default Home;
