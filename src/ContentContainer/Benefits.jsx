/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

function Benefits() {
  let commonClassNames = "col-2 text-center pt-3 border-light round-3 bg-light";

  return (
    <div className="promotion-container d-flex justify-content-around mt-3">
      <div className={`feature free-delivery border ${commonClassNames}`}>
        <h2 className="bi bi-truck" />
        <div className="text">
          <h5>Free Delivery</h5>
          <p>When ordering from $500</p>
        </div>
      </div>
      <div
        className={`feature 30-days-return border col-2 ${commonClassNames}`}
      >
        <h2 className="bi bi-clock-history" />
        <div className="text">
          <h5>30 days return</h5>
          <p>Total refund in 30 days</p>
        </div>
      </div>
      <div
        className={`feature secure-payment border col-2 ${commonClassNames}`}
      >
        <h2 className="bi bi-credit-card" />
        <div className="text">
          <h5>Secure Payment</h5>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className={`feature 24/7-support border col-2 ${commonClassNames}`}>
        <h2 className="bi bi-chat" />
        <div className="text">
          <h5>24/7 Support</h5>
          <p>Dedicated customer support</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
