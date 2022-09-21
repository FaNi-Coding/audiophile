import { MouseEvent } from "react";

// Click handler for the button
export const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log(e);
};

// HREF Boilerplate
export const HrefBoiler = {
  pathname: "/category/1",
  query: {
    id: 1,
    price: 100,
    currency: "SEK",
    product: "EarPhones",
  },
};

export const navLinks = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "headphones",
    href: "headphones",
    img: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    name: "speakers",
    href: "speakers",
    img: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    name: "earphones",
    href: "earphones",
    img: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
  },
];
