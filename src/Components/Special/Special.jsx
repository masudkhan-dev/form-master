import { useContext } from "react";
import { AssetsContext } from "../Grandpa/Grandpa";

const Special = () => {
  const gift = useContext(AssetsContext);

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="border-2 border-red-500 p-10">
          <h2>Special </h2>
          <p>Gift is: {gift}</p>
        </div>
      </div>
    </div>
  );
};

export default Special;
