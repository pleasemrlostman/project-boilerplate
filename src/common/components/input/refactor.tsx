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

type InputAreaProps<T extends FieldValues> =
  React.ComponentPropsWithoutRef<"input"> & {
    _field?: ControllerRenderProps<T, Path<T>>;
    wrapClass?: string;
    className?: string;
  };

  const Refactor = <T extends FieldValues>({
    _field,
    wrapClass,
    className,
    ...props
  } :InputAreaProps<T>)=>{
    const _className = twMerge("border", className);
    return (
      <div className={wrapClass ?? ""}>
        <input 
          {..._field} 
          {...props}  
          className={_className}  
          type="text"  
        />
      </div>
    )
  }

const RefactorWithController =  <T extends FieldValues>({
  withErrorMessage = false,
  ...props
}: UseControllerProps<T> &
    React.ComponentPropsWithoutRef<"input"> & {
      withErrorMessage?: boolean;
    }
) => {
  const { field, fieldState } = useController(props);
  return (
    <>
      <Refactor<T> _field={field} {...props} />
      {withErrorMessage && (
        <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
      )}
    </>
  )
}


export { Refactor, RefactorWithController }