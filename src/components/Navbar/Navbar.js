import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  const handleNavBatItemClick = (element) => {
    console.log(element);
  };

  return (
    <>
      <div className="navBarContainer">
        <div className="title">Ranvir Singh Virk</div>
        <div className="navBarItems">
          {" "}
          {["About", "Resume", "Projects", "Contacts"].map((element) => (
            <>
              <p
                key={element}
                onClick={() => handleNavBatItemClick(element)}
                className="items"
              >
                {element}
              </p>
            </>
          ))}{" "}
        </div>
        <div className="navIcons"> GitHub </div>
      </div>
    </>
  );
}
