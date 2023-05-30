import React from "react";
import image from "../Asset/EDYODA.png";
import search from "../Asset/Search Icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const navbar = {
    height: "40px",
    width: "166px",
    left: "198px",
    top: "0px",
    borderRadius: "52px",
    padding: "10px 42px 10px 42px",
    background: "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
    color: "#fff",
    border: "none",
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white "
      style={{
        padding: "10px 50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav mr-auto"
          style={{
            justifyContent: "space-between",
            display: "flex",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <li class="nav-item active ml-5" style={center}>
              <a class="nav-link" href="#">
                Courses
                <span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    style={{
                      top: "38%",
                      position: "absolute",
                      paddingLeft: "5px",
                    }}
                  />
                </span>
              </a>
            </li>
            <li class="nav-item active  ml-5" style={center}>
              <a class="nav-link" href="#">
                Programs
                <span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    style={{
                      top: "38%",
                      position: "absolute",
                      paddingLeft: "5px",
                    }}
                  />
                </span>
              </a>
            </li>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <li class="nav-ite " style={center}>
              <img src={search} alt="" />
            </li>
            <li class="nav-item active" style={center}>
              <a class="nav-link ml-5" href="#">
                Log In
              </a>
            </li>
            <li class="nav-item active" style={center}>
              <a class="nav-link ml-5" href="#">
                <button style={navbar}>JOIN NOW</button>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
