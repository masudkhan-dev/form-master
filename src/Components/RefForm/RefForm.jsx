import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);


  useEffect(()=>{
    nameRef.current.focus()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <div className="container mx-auto px-3 lg:px-0 border-2 border-blue-500 py-20">
        <div>
          <h2 className="text-3xl py-5"> Ref Form </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            ref={phoneRef}
            type="number"
            name="phone"
            placeholder="Number"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input
            ref={passwordRef}
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

export default RefForm;
