import { useForm } from "react-hook-form";
import { Textarea, TextareaWithController } from ".";
import { DevTool } from "@hookform/devtools";
const Example = () => {
  const { control } = useForm({
    defaultValues: {
      "text-area": "",
    },
  });
  return (
    <form
    //   onSubmit={handleSubmit(
    //     (data) => {
    //       console.log("data", data);
    //     },
    //     (error) => {
    //       console.log("error", error);
    //     },
    //   )}
    >
      <button>전송</button>
      <Textarea />
      <TextareaWithController
        withErrorMessage
        control={control}
        name="text-area"
        rules={{
          required: "비어두지마",
        }}
      />
      <DevTool control={control} />
    </form>
  );
};

export default Example;
