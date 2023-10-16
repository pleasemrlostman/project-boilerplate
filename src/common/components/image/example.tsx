import ImageSection from ".";

const Example = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <ImageSection className="w-32" src={imageLink} />
      <ImageSection className="w-16" src={imageLink} />
      <ImageSection className="w-1/2" src={imageLink} />
      <ImageSection className="w-[10rem] before:pb-[150%]" src={imageLin2} />
      <ImageSection className="w-full" src={imageLink} />
      <ImageSection className="w-full" src={imageLink} />
    </div>
  );
};

export default Example;
const imageLink =
  "https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
const imageLin2 =
  "https://plus.unsplash.com/premium_photo-1669689971484-171a3db9844b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
