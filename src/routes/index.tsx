import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import dev from "@/routes/dev";
export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) <>not found</>;
  return <>not found</>;
};

export default [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    index: true,
    element: (
      <>
        <div className="w-screen h-screen flex items-center justify-center text-3xl text-slate-500">
          Project-boilerplate
        </div>
      </>
    ),
  },
  dev,
];
