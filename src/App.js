import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import Option from "./Option";

function App() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [changescreen, setChangeScreen] = useState(false);
  const [paymentscreen, setPaymentscreen] = useState(false);
  const [detailscreen, setDetailscreen] = useState(false);

  return (
    <div className="App">
      {changescreen ? (
        <Option
          paymentscreen={paymentscreen}
          setPaymentscreen={setPaymentscreen}
          detailscreen={detailscreen}
          setDetailscreen={setDetailscreen}
        />
      ) : (
        <Form
          email={email}
          setEmail={setEmail}
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          setFirstname={setFirstname}
          setLastname={setLastname}
          setPhone={setPhone}
          setChangeScreen={setChangeScreen}
        />
      )}
    </div>
  );
}

export default App;
