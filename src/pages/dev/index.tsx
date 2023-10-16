import { Link, Outlet, useLocation } from "react-router-dom";

const elementsObject = [
  {
    path: "text",
    title: "text",
  },
  {
    path: "input",
    title: "input",
  },
  {
    path: "image",
    title: "image",
  },
];

const Dev = () => {
  const { pathname } = useLocation();
  const componentPathname = pathname.split("/")[2];

  return (
    <>
      <div className="p-4 flex gap-2">
        {elementsObject.map((value) => {
          return (
            <Link
              key={value.path}
              to={value.path}
              className={`border p-4 flex items-center justify-center font-bold ${
                value.path === componentPathname && "bg-red-300"
              }`}
            >
              {value.title}
            </Link>
          );
        })}
      </div>
      <div className="border border-separate p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Dev;
