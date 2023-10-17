import Calendar from ".";
import { FormProvider, useForm } from "react-hook-form";

const Example = () => {
  const methods = useForm({
    defaultValues: {
      calendar1: "",
      calendar2: "",
      calendar3: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center gap-4">
        <Calendar registerName="calendar1" />
        <Calendar registerName="calendar2" />
        <Calendar registerName="calendar3" />
      </div>
    </FormProvider>
  );
};

export default Example;
