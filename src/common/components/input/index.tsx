// import React, { useCallback, useState } from "react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Text from "@/common/components/text";

type Props = React.ComponentPropsWithoutRef<"input"> & {
  className?: string;
  registerName?: string;
  requiredMessage?: string;
  wrapDivClassName?: string;
  regex?: RegExp;
  regexErrorMessage?: string;
  errorMessageNone?: boolean;
  minLength?: number;
  maxLength?: number;
  minLengthMsg?: string;
  maxLengthMsg?: string;
  validateFn?: (
    value: string,
    formValues: Record<string, string>,
  ) => string | undefined | boolean;
  onInputCallBack?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Input Text 컴포넌트를 리턴한다
 * @param {string} className - 추가하고 싶은 css 속성값을 추가
 * @param {string} registerName - register에 바인딩 해줄 string 값을 input해준다
 * @param {string} requiredMessage - 해당 required true일 경우 메시지를 작성해준다
 * @param {string} wrapDivClassName - 해당 input을 감싸고 있는 div에 class를 추가한다
 * @param {string} regex - 해당 register에 정규식을 추가 할 수 있습니다
 * @param {string} regexErrorMessage - 정규식이 틀렸을 때 에러메시지를 작성해주세요
 *
 */
const Input = ({
  registerName,
  requiredMessage,
  wrapDivClassName,
  regex,
  regexErrorMessage,
  errorMessageNone = true,
  minLength,
  minLengthMsg,
  onInputCallBack,
  validateFn,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
    // setValue,
  } = useFormContext();

  const [inputParams, setInputParams] = useState<boolean>(false);
  inputParams;

  //   const resetRegisterValue = useCallback(
  //     (registerName: string) => () => {
  //       setValue(registerName, "");
  //       setInputParams(false);
  //     },
  //     [],
  //   );

  const className = `border border-line hover:border-black focus:border-black outline-0 placeholder:text-light py-2 px-4 w-full pr-[1.78rem] ${
    props.className ?? ""
  } ${
    registerName && errors[registerName]
      ? "border-error hover:border-error focus:border-error placeholder:text-error"
      : ""
  }`;
  if (!registerName)
    return (
      <div className={wrapDivClassName ?? ""}>
        <input {...props} className={className} />
      </div>
    );

  return (
    <div className={`flex flex-col gap-1 relative ${wrapDivClassName ?? ""}`}>
      <input
        {...register(registerName, {
          onChange: (e) => {
            const value = e.target.value as string;
            if (value) {
              setInputParams(true);
            } else {
              setInputParams(false);
            }
          },
          required: requiredMessage ? requiredMessage : false,
          pattern: regex
            ? {
                value: regex,
                message: regexErrorMessage ? regexErrorMessage : "",
              }
            : undefined,
          minLength: minLength
            ? {
                value: minLength,
                message: minLengthMsg ? minLengthMsg : "",
              }
            : undefined,
          validate: validateFn && validateFn,
        })}
        {...props}
        className={className}
        onInput={onInputCallBack && onInputCallBack}
      />
      {/* {inputParams && (
        <ImageSection
          src="./assets/icon/icon_x.svg"
          onClick={resetRegisterValue(registerName)}
          className="w-4 h-4 absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      )} */}
      {errors[registerName] && !errorMessageNone && (
        <Text as="span" className={`text-error pl-2`}>
          {errors[registerName]?.message?.toString()}
        </Text>
      )}
    </div>
  );
};

export default Input;
