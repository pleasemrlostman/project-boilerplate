import { twMerge } from "tailwind-merge";

const ErrorMessage = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => {
  const className = twMerge("", props.className);

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
};

export { ErrorMessage };
