import Input from ".";
import { FormProvider, useForm } from "react-hook-form";

const Example = () => {
  const methods = useForm({
    defaultValues: {
      input1: "test",
    },
  });

  return (
    <FormProvider {...methods}>
      <Input registerName="input1" />
    </FormProvider>
  );
};

export default Example;
