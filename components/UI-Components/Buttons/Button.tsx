import type { NextPage } from "next";
import { DefaultButton } from "./ButtonStyle";
import type { ButtonProps } from "./ButtonInterface";

/**
 *
 * @param {Boolean} primary   - Default button
 * @param {Boolean} outlined  - Outlined button
 * @param {Boolean} secondary - Text with icon to the right
 */
const Button: NextPage<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <DefaultButton className={className} {...props}>
      {children}
    </DefaultButton>
  );
};
export default Button;
