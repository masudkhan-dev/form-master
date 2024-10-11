import useImportState from "../../Hooks/useImportState";

const HookForm = () => {
  const [name, handleNameChange] = useImportState("tom");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 border-4 border-green-500 py-20">
        <div>
          <h2 className="text-3xl py-5"> Hook Form </h2>
        </div>
        <form onChange={handleSubmit}>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="number"
            name="phone"
            placeholder="Number"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default HookForm;
