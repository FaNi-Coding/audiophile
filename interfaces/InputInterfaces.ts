export interface Props {
  maxWidth?: string;
  margin?: string;
  primary?: string;
  name?: string;
  type?: string;
  value?: string;
}

export type InputProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
