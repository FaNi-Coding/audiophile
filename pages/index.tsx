import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Button from "../components/UI-Components/Buttons/Button";
import Input from "../components/UI-Components/Inputs/Input";


const Home: NextPage = () => {


  return (
    <Layout title={""} description={""} keywords={""}>
      <Button href={{
        pathname:'/category/1',
        query: {id: 100,
        price: 45
      }
    }} primary>SEE PRODUCT</Button>
      <Button href="yoo" outlined>SEE PRODUCT</Button>
      <Button href="yoo" secondary>SHOP</Button>
      <Input name="Name" type="email" />
      <Input type="radio" value="e-Money" />
    </Layout>
  );
};

export default Home;
