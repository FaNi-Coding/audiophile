//components
import { StyledShopLinks } from "./styles/ShopLinkStyles";
//functions
import { navLinks } from "../../../helpers/boilerplate/functions";
import LinkUI from "../Link/Link";
import Button from "../Buttons/Button";

type Props = {};

const ShopLinks = (props: Props) => {
  const temperedNavLinks = navLinks.filter(
    (links) => links.href !== "home" && links.name !== "home"
  );
  return (
    <StyledShopLinks className="container">
      <ul>
        {temperedNavLinks.map((link: any, idx: number) => (
          <li key={idx}>
            <img src={link.img} alt={link.name} />
            <LinkUI href={link.href} text={link.name} />
            <Button secondary>shop</Button>
          </li>
        ))}
      </ul>
    </StyledShopLinks>
  );
};

export default ShopLinks;
