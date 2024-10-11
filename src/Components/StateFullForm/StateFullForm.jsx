import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("password must be 6 charecter or longer");
    } else {
      setError("");
      console.log(name, email, phone, password);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 border-2 border-pink-500 py-20">
      <div>
          <h2 className="text-3xl py-5"> State Form </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleName}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            onChange={handlePhone}
            type="number"
            name="phone"
            placeholder="Number"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />
          <input
            onChange={handlePassword}
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <br />
          <br />

          <input type="submit" value="Submit" className="btn" />

          {
            error && <p className="text-red-500">{error}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default StateFullForm;
