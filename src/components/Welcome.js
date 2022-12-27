import React, { useState, useEffect } from "react";
// import galleryImagesData from './data/gallery_images.json'

const Welcome = () => {
  const [galleryImagesData, setGalleryImagesData] = useState([]);

  const loadGalleryImagesData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://a6lnno41t7.execute-api.us-east-1.amazonaws.com/Production/gallery_images"
    );
    let jsonData = await resp.json();

    // Assign response data to our state variable
    setGalleryImagesData(jsonData);
  };

  useEffect(() => {
    // Load the gallery images data from the API Gateway
    loadGalleryImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryImagesData.map((image) => (
            <img className={image.className} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1>Welcome to the Yak and Yeti&nbsp;Hotel</h1>
        <p>
          The original Yak ans Yeti perseveres after 50 years in the heart of
          Kathmandu. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Yak and Yeti
          Hotel in the West End, browse our website and{" "}
          <a
            href="https://www.yakandyeti.com/images/pdf/hotel-yny-safety-converted.pdf"
            target="blank"
          >
            download our handy information sheet.
          </a>
        </p>
      </article>
    </div>
  );
};

export default Welcome;
