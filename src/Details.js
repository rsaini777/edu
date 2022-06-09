import React, { useState } from "react";

function Details({ detailscreen, setDetailscreen }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    street_address: "",
    city: "",
    zip: "",
    country: "",
  });
  const [data, setData] = useState([]);
  console.log(data);

  const details = () => {
    setDetailscreen(!detailscreen);
  };
  const detailData = () => {
    setData(input);
  };

  return (
    <div>
      {detailscreen ? (
        <>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="street_address"
            onChange={(e) =>
              setInput({ ...input, street_address: e.target.value })
            }
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => setInput({ ...input, city: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="zip"
            onChange={(e) => setInput({ ...input, zip: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="country"
            onChange={(e) => setInput({ ...input, country: e.target.value })}
          ></input>
          <br></br>
          <button onClick={detailData}>Submit</button>
        </>
      ) : (
        <button onClick={details}>option 1</button>
      )}
    </div>
  );
}

export default Details;
