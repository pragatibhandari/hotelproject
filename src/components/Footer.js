import React from "react";
import "../../src/App.css";

const Footer = () => {
  return (
    <footer className="scene">
      <article className="content">
        <div id="socialmedia">
          <ul className="group">
            <li>
              <a href="https://twitter.com">
                <img
                  className="icon"
                  src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"
                  alt="icon for twitter"
                />
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com">
                <img
                  className="icon"
                  src="https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png"
                  alt="icon for facebook"
                />
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com">
                <img
                  className="icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUB_cKK7mdBWQIeyrBRoKBeSJ6GsmWdc6UQ&usqp=CAU"
                  alt="icon for youtube"
                />
              </a>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
