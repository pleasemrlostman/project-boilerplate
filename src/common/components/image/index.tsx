import { useRef } from "react";

type Props = React.ComponentPropsWithoutRef<"img"> & {
  src: string;
  className?: string;
};

/**
 * * 이미지 URL을 src로 받아 img에 src속성으로 들어간 컴포넌트를 리턴합니다
 *
 * * before로 만들지 않으면 flex 처럼 다른 element에 영향을 받아 의도한 넓이가 안나올 수 도 있음
 *
 *
 * ! imageType - RATIO 너비값과 pb값을 같이넣어주세요 pb-[n%]를 추가해주면 너비에 n%의 높이를 가진 직사각형을 리턴합니다
 *
 * @param {string} src - 이미지 경로
 * @param {string} className - 추가하고 싶은 class를 넣어주세요
 */
const ImageSection = ({ src, className, ...props }: Props) => {
  const _className = `before:pb-[100%] ${className ?? ""}`;
  const ref = useRef<HTMLImageElement>(null);

  return (
    <div className={`${_className ?? ""} ${imageWrapClass}`}>
      <img {...props} ref={ref} className={`${imageClass}`} src={src} />
    </div>
  );
};

export default ImageSection;
const imageWrapClass = `relative overflow-hidden border before:content-[''] before:w-full before:block `;
const imageClass = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`;
