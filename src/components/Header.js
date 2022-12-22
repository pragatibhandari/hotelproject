import React, { useState, useEffect } from "react";
//import menuLinksData from "./data/menu_links.json";

const Header = () => {
  const [menuLinksData, setmenuLinksData] = useState([]);

  const loadMenuLinksData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://az027246ba.execute-api.us-east-1.amazonaws.com/Production/menulinks"
    );
    let jsonData = await resp.json();
    setmenuLinksData(jsonData);
  };

  useEffect(() => {
    // Load menu links data from API Gateway
    loadMenuLinksData();
  }, []);

  return (
    <header id="intro">
      <article className="fullheight">
        <div className="hgroup">
          <h1>Yak and Yeti Hotel</h1>
          <h2>Kathmandu</h2>
          <p>
            <a href="#welcome">
              <img
                src="https://landonhotel.com/images/misc/arrow.png"
                alt="down arrow"
              />
            </a>
          </p>
        </div>
      </article>

      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">
              Yak and Yeti <span>Hotel</span>
            </a>
          </div>
          <ul>
            {menuLinksData.map((link) => (
              <li>
                <a className={`icon ${link.class}`} href={link.href}>
                  <span>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
