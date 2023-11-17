import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  buttonType?: string;
};
type ButtonStyleType = {
  [key: string]: string;
};

/**
 * 버튼 컴포넌트를 리턴한다
 * @param {string} buttonType - text
 * @param {string} buttonType - main
 * @param {string} buttonType - sub
 * @param {string} buttonType - disabled
 * @param {string} buttonType - modal
 */
const Button = ({ buttonType, ...props }: ButtonProps) => {
  const _className = twMerge(
    `select-none ${buttonClassName[buttonType ?? "DEFAULT"]} ${buttonStyle}`,
    props.className,
  );

  return <button {...props} className={_className} />;
};

export default Button;

const buttonStyle = "rounded border font-light px-2 text-sm";
const buttonClassName: ButtonStyleType = {
  text: ``,
  main: ``,
  sub: ``,
  disabled: ``,
  modal: ``,
  default: ``,
};
