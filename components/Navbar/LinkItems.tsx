/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../UI-Components/Buttons/Button";

type Props = {
  array: string[];
  mobile?: boolean;
  menuItems?: boolean;
  components?: any;
};

const LinkItems = ({ array, menuItems }: Props) => {
  console.log(array);
  return array.map((item: any, idx: number) => (
    <li key={idx}>
      {menuItems && <img src={item.img} alt={item.name} />}
      <Link href={item.href}>
        <a>{item.name}</a>
      </Link>
      {menuItems && <Button secondary>shop</Button>}
    </li>
  ));
};

export default LinkItems;
