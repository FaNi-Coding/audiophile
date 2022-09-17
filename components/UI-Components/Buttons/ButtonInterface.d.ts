import { ButtonHTMLAttributes } from "react";
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
export interface ButtonPropsInterface {
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
  outlined?: boolean;
  secondary?: boolean;
  href?: Object;
}
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
export type ButtonProps = ButtonPropsInterface &
  ButtonHTMLAttributes<HTMLButtonElement>;
