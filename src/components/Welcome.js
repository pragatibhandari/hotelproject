import React from "react";
import galleryImagesData from "../components/data/gallery_images.json";

function Welcome() {
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryImagesData.map((images) => (
            <img
              src={images.src}
              alt={images.alt}
              className={images.className}
            />
          ))}
        </div>
        <h1>Welcome to the Yak and Yeti &nbsp;Hotel</h1>
        <p>
          The original Yak and Yeti perseveres after 50 years in the heart of
          West London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Yak and Yeti
          Hotel in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default Welcome;
