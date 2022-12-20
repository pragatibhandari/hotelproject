var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("writing entries to GalleryImages table");

var dynamodb = new AWS.DynamoDB.DocumentClient();

var GalleryImagesData = JSON.parse(
  fs.readFileSync("../components/data/gallery_images.json", "utf-8")
);
GalleryImagesData.forEach(function (galleryImage) {
  var className = galleryImage.className;
  if (className.trim() == "") {
    var params = {
      TableName: "GalleryImages",
      Item: {
        src: galleryImage.src,
        alt: galleryImage.alt,
        className: "no_class",
      },
    };
  } else {
    var params = {
      TableName: "GalleryImages",
      Item: {
        src: galleryImage.src,
        alt: galleryImage.alt,
        className: galleryImage.className,
      },
    };
  }

  dynamodb.put(params, function (err, data) {
    if (err)
      console.error(
        "Unable to load data into table forgalleryImage ",
        galleryImage.text,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", galleryImage.name, "to table.");
  });
});
