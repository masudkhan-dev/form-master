const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // form default reload কে off করে

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 border-2 border-rose-500 py-20">
      <div>
          <h2 className="text-3xl py-5"> Simple Form </h2>
        </div>
        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
