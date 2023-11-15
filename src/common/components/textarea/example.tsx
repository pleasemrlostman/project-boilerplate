import { FieldErrors, useForm } from "react-hook-form";
import { Textarea, TextareaWithController } from ".";
import { DevTool } from "@hookform/devtools";
const Example = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      "text-area": "",
    },
  });

  type SubmitType = {
    "text-area": string;
  };

  const onSubmit = (data: SubmitType) => alert(`현재 값, ${data}`);
  const onError = (error: FieldErrors<SubmitType>) => {
    alert(`에러, ${error["text-area"]?.message}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <button>전송</button>
      <Textarea />
      <TextareaWithController
        withErrorMessage
        control={control}
        name="text-area"
        rules={{
          required: "비어두지마",
          pattern: {
            message: "한글만 써라",
            value: /^[가-힣]+$/,
          },
        }}
      />
      <DevTool control={control} />
    </form>
  );
};

export default Example;
