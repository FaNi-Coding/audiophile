import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI-Components/Buttons/Button";
import Input from "../components/UI-Components/Inputs/Input";
import LinkUI from "../components/UI-Components/Link/Link";
import { handleClick, HrefBoiler } from "../helpers/boilerplate/functions";
const Home: NextPage = () => {

  return (
    <Layout title={""} description={""} keywords={""}>
      <Button primary>
        <LinkUI href={HrefBoiler} text="See Product" />
      </Button>
      <Button href="yoo" outlined>
        <LinkUI href='test'/>
      </Button>
      <Button onClick={handleClick} secondary>SHOP</Button>
      <Input name="Name" type="email" />
      <Input type="radio" value="e-Money" />
    </Layout>
  );
};

export default Home;
