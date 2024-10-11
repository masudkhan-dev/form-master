const ReuseableForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto px-3 lg:px-0 border-4 border-violet-500 py-20">
      <div>
        <h2 className="text-3xl py-5"> Reuseable Form</h2>
      </div>
      <form onChange={handleSubmit}>
        <input
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
  );
};

export default ReuseableForm;
