import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import HookForm from "./Components/HookForm/HookForm";
import RefForm from "./Components/RefForm/RefForm";
import ReuseableForm from "./Components/ReuseableForm/ReuseableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StateFullForm from "./Components/StateFullForm/StateFullForm";

function App() {
  return (
    <div className="space-y-5">
      <Grandpa />
      <SimpleForm />
      <StateFullForm />
      <RefForm />
      <HookForm />
      <ReuseableForm />
    </div>
  );
}

export default App;
