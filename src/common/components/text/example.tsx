import Text from "@/common/components/text";
import { Link } from "react-router-dom";

const Example = () => {
  return (
    <>
      <Text as="h2">h2 Hello world</Text>
      <Text as="h3">h3 Hello world</Text>
      <Text as="h4">h4 Hello world</Text>
      <Text as="h5">h5 Hello world</Text>
      <Text as="p">p Hello world</Text>
      <div className="p-6">
        <Link
          to="/dev"
          className="border p-4 flex items-center justify-center font-bold"
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default Example;
