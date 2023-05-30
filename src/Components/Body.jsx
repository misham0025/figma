import React from "react";

function Body() {
  const style = {
    width: "100%",
    background: "linear-gradient(37deg, rgba(0,0,0,1) 0%, rgba(1,1,68,1) 35%)",
    height: "92vh",
    display: "flex",
  };
  return (
    <div style={style}>
      <div style={{ width: "50%" }}>
        <h1 style={{ color: "white" }}>Access curated courses worth</h1>
        <h1 style={{ color: "white" }}>
          ₹<strike style={{ color: "red" }}>18,500</strike> at just{" "}
          <span style={{ color: "green" }}>₹99</span> per year!
        </h1>
        <div style={{ color: "white" }}>100+ Job relevant courses </div>
        <div style={{ color: "white" }}>20,000+ Hours of content</div>
        <div style={{ color: "white" }}>Exclusive webinar access</div>
        <div style={{ color: "white" }}>Scholarship worth ₹94,500</div>
        <div style={{ color: "white" }}>Ad Free learning experience</div>
      </div>
      <div style={{ width: "50%" }}>
        <div class="form-check" style={{border:"1px solid white"}}>
         
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
