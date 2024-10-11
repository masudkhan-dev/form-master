import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
  return (
    <div>
      <section className="border-2 border-red-500 p-10 ">
        <h2>Dad</h2>
        <div className="flex gap-x-2">
          <MySelf />
          <Brother />
          <Sister />
        </div>
      </section>
    </div>
  );
};

export default Dad;
