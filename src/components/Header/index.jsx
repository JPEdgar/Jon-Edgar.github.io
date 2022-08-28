import React from "react";

// components
import LinkTo from "../elements/LinkTo";

const Header = () => {
  return (
    <header className="px-4 header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100px", }} >
      <div className="headerText">Jonathon Edgar</div>
      <LinkTo href="https://github.com/JPEdgar" text="GitHub" icon="fab fa-github" insertClass="gitLinkSecondary" gap />
    </header>
  );
};

export default Header;
