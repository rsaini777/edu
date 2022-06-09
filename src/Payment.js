import React, { useState } from "react";

function Payment({ paymentscreen, setPaymentscreen }) {
  const [input, setInput] = useState({
    card_holder_name: "",
    expired_date: "",
    card_no: "",
    cvv: "",
  });
  const [data, setData] = useState([]);
  console.log(data);

  const payment = () => {
    setPaymentscreen(!paymentscreen);
  };
  const paymentData = () => {
    setData(input);
  };

  return (
    <div>
      {paymentscreen ? (
        <>
          <input
            type="text"
            placeholder="holdername"
            onChange={(e) =>
              setInput({ ...input, card_holder_name: e.target.value })
            }
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="expired date"
            onChange={(e) =>
              setInput({ ...input, expired_date: e.target.value })
            }
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="card no"
            onChange={(e) => setInput({ ...input, card_no: e.target.value })}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="cvv"
            onChange={(e) => setInput({ ...input, cvv: e.target.value })}
          ></input>
          <br></br>
          <button onClick={paymentData}>Submit details</button>
        </>
      ) : (
        <button onClick={payment}>option 2</button>
      )}
    </div>
  );
}

export default Payment;
