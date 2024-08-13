import { ClipLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="flex justify-center p-5">
        {" "}
        <ClipLoader />{" "}
      </div>
    )
  );
};
