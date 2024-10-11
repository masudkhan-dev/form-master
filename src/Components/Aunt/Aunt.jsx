import Cousin from "../Cousin/Cousin";

const Aunt = () => {
  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0">
        <div className="border-2 border-red-500 p-10">
          <h2>Aunt</h2>
          <div className="flex">
            <Cousin name={'gopal bhar'}/>
            <Cousin name={'krisna chandra'}/>
            <Cousin name={'pondit mosai'}/>
            <Cousin name={'raj kobi'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aunt;
