import React, { useState } from "react";
import Details from "./Details";
import Payment from "./Payment";

function Option({
  paymentscreen,
  setPaymentscreen,
  detailscreen,
  setDetailscreen,
}) {
  return (
    <div>
      {!paymentscreen && !detailscreen ? (
        <>
          <Details
            detailscreen={detailscreen}
            setDetailscreen={setDetailscreen}
          />
          <Payment
            paymentscreen={paymentscreen}
            setPaymentscreen={setPaymentscreen}
          />
        </>
      ) : detailscreen ? (
        <Details
          detailscreen={detailscreen}
          setDetailscreen={setDetailscreen}
        />
      ) : paymentscreen ? (
        <Payment
          paymentscreen={paymentscreen}
          setPaymentscreen={setPaymentscreen}
        />
      ) : (
        <h1>go back</h1>
      )}
    </div>
  );
}

export default Option;
