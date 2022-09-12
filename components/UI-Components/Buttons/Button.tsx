import type { NextPage } from "next";
import { DefaultButton } from "./ButtonStyle";
import type { ButtonProps } from "./ButtonInterface";
import Link from "next/link";

/**
 *
 * @param {Boolean} primary   - Default button
 * @param {Boolean} outlined  - Outlined button
 * @param {Boolean} secondary - Text with icon to the right
 */
const Button: NextPage<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <DefaultButton className={className} {...props}>
      <Link href={props.url!}>{children}</Link>
    </DefaultButton>
  );
};
export default Button;
