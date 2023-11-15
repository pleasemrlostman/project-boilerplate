import TextExample from "@/common/components/text/example";
import InputExample from "@/common/components/input/example";
import ImageExample from "@/common/components/image/example";
import CalendarExample from "@/common/components/calendar/example";
import Textarea from "@/common/components/textarea/example";
import { RouteObject } from "react-router-dom";
import Dev from "@/pages/dev";
const dev: RouteObject = {
  path: "dev",
  element: <Dev />,
  children: [
    { path: "text", element: <TextExample /> },
    { path: "input", element: <InputExample /> },
    { path: "image", element: <ImageExample /> },
    { path: "calendar", element: <CalendarExample /> },
    { path: "textarea", element: <Textarea /> },
  ],
};

export default dev;
