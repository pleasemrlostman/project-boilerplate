// import Input from ".";
import { FieldErrors, useForm } from "react-hook-form";
import { Refactor , RefactorWithController} from "./refactor";
import { DevTool } from "@hookform/devtools";

const Example = () => {
  const { control, handleSubmit} = useForm({
    defaultValues: {
      input: "test",
    },
  });

  type SubmitType = {
    "input": string;
  };

  const onSubmit = (data: SubmitType) => alert(`현재 값, ${data.input}`);
  const onError = (error: FieldErrors<SubmitType>) => {
    alert(`에러, ${error["input"]?.message}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <button className="border p-2">전송</button>
      <Refactor />
      <RefactorWithController 
        control={control}  
        name="input" 
      />
      <DevTool control={control} />
    </form>
  );
};

export default Example;
