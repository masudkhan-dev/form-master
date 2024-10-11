import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetsContext = createContext();


const Grandpa = () => {
  return (
    <div className="border-2 border-blue-800 py-10">
      <h2 className="text-3xl">Granpa</h2>

      <AssetsContext.Provider value="gold">
        <section className="flex justify-center items-center gap-10">
          <Dad />
          <Uncle />
          <Aunt />
        </section>
      </AssetsContext.Provider>
    </div>
  );
};

export default Grandpa;
