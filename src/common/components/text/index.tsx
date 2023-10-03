type Props<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * 텍스트 컴포넌트를 리턴한다
 * @param {string} as - "h2"
 * @param {string} as - "h3"
 * @param {string} as - "h4"
 * @param {string} as - "h5"
 * @param {string} as - "p"
 * @param {string} as - "span"
 * @param {string} className - 추가하고 싶은 css 속성값을 추가
 */
const Text = <C extends React.ElementType>({ as, ...props }: Props<C>) => {
  const Component = as || "p";
  let className;
  switch (Component) {
    case "h2":
      className = `text-[2rem] font-black text-black ${props.className ?? ""}`;
      break;
    case "h3":
      className = `text-[1.5rem] font-black text-black ${
        props.className ?? ""
      }`;
      break;
    case "h4":
      className = `text-[1.25rem] font-black text-black ${
        props.className ?? ""
      }`;
      break;
    case "h5":
      className = `text-[1.125rem] font-black text-black ${
        props.className ?? ""
      }`;
      break;
    case "p":
      className = `text-[0.9375rem] font-normal leading-[1.3rem] ${
        props.className ?? ""
      }`;
      break;
    case "span":
      className = `text-black ${props.className ?? "text-[0.813rem]"}`;
      break;
    default:
      break;
  }
  return <Component {...props} className={className} />;
};

export default Text;
