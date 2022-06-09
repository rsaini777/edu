import React from "react";

function Form({
  phone,
  email,
  firstname,
  lastname,
  setChangeScreen,
  setFirstname,
  setLastname,
  setEmail,
  setPhone,
}) {
  const changescreenData = () => {
    setChangeScreen(true);
  };
  return (
    <div>
      <input
        type="text"
        value={firstname}
        placeholder="firstname"
        onChange={(e) => setFirstname(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={lastname}
        placeholder="lastname"
        onChange={(e) => setLastname(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={(e) => setPhone(e.target.value)}
      ></input>
      <br></br>
      <button onClick={changescreenData}>Next button</button>
    </div>
  );
}

export default Form;
