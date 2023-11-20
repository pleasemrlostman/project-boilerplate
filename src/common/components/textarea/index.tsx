import React from "react";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { ErrorMessage } from "@/common/components/error-message";
type TextAreaProps<T extends FieldValues> =
  React.ComponentPropsWithoutRef<"textarea"> & {
    _field?: ControllerRenderProps<T, Path<T>>;
    wrapClass?: string;
    className?: string;
  };

const Textarea = <T extends FieldValues>({
  _field,
  wrapClass,
  className,
  ...props
}: TextAreaProps<T>) => {
  const _className = twMerge("border", className);
  return (
    <div className={wrapClass ?? ""}>
      <textarea
        {..._field}
        {...props}
        className={_className}
        name={props.name ?? ""}
        id={props.id ?? ""}
        cols={props.cols ? props.cols : 30}
        rows={props.rows ? props.rows : 10}
      />
    </div>
  );
};

const TextareaWithController = <T extends FieldValues>({
  withErrorMessage = false,
  ...props
}: UseControllerProps<T> &
  React.ComponentPropsWithoutRef<"textarea"> & {
    withErrorMessage?: boolean;
  }) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <Textarea<T> _field={field} {...props} />
      {withErrorMessage && (
        <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
      )}
    </>
  );
};

export { Textarea, TextareaWithController };
