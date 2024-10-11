import Special from "../Special/Special";

const MySelf = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="border-2 border-red-500 p-10">
          <h2> MySelf </h2>
          <div>
            <Special/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
