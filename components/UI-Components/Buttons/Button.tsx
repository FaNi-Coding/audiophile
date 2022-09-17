import type { NextPage } from "next";
import { DefaultButton } from "./ButtonStyle";
import type { ButtonPropsInterface } from "./ButtonInterface";
import Link from "next/link";

/**
 *
 * @param {Boolean} primary   - Default button
 * @param {Boolean} outlined  - Outlined button
 * @param {Boolean} secondary - Text with icon to the right
 * @param {String}  href      - href = "product"
 * @param {Object}  href      - href = { pathname: 'category',
 *                                       query: { product: 'EaryPhones' }
 *                                     }
 */
const Button = ({ className, children, ...props }:ButtonPropsInterface) => {
  
  return (
    <DefaultButton  className={className} {...props}>
     {children}
    </DefaultButton>
  );
};
export default Button;
