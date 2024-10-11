import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="border-2 border-red-500 p-10">
          <h2>Uncle </h2>
          <div className="flex">
            <Cousin name={"tom"} />
            <Cousin name={"jerry"} />
            <Cousin name={"montri mosai"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uncle;
