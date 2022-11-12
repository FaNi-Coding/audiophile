import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";
import Banner from "../components/UI-Components/Banners/Banner";
import Button from "../components/UI-Components/Buttons/Button";
import Input from "../components/UI-Components/Inputs/Input";
import LinkUI from "../components/UI-Components/Link/Link";
import ShopLinks from "../components/UI-Components/Sections/ShopLinks";
import { handleClick, HrefBoiler } from "../helpers/boilerplate/functions";

/* Ok ska börja jobba sluta lalla :D tack fadil fantastiks feedback */

const Home: NextPage = () => {
  return (
    <Layout
      title={""}
      description={""}
      keywords={""}
      component={
        <Banner
          component={
            <Button primary>
              <LinkUI href={HrefBoiler} text="See Product" />
            </Button>
          }
        />
      }
    >
      {/*  <Button primary>
        <LinkUI href={HrefBoiler} text="See Product" />
      </Button> 
       <Button href="yoo" outlined>
        <LinkUI href="test" />
      </Button>
      <Button onClick={handleClick} secondary>
        SHOP
      </Button>
      <Input name="Name" type="email" />
      <Input type="radio" value="e-Money" />
      <ShopLinks /> */}
    </Layout>
  );
};

export default Home;
