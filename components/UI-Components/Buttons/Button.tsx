import type { NextPage } from "next";
import { DefaultButton } from "./ButtonStyle";
import type { ButtonPropsInterface, ButtonProps } from "./Interface";

/**
 *
 * @param {Boolean} primary   - Default button
 * @param {Boolean} outlined  - Outlined button
 * @param {Boolean} secondary - Text with icon to the right
 */
const Button: NextPage<ButtonPropsInterface> = ({
  className,
  children,
  ...props
}) => {
  return (
    <DefaultButton className={className} {...props}>
      {children}
    </DefaultButton>
  );
};
export default Button;
