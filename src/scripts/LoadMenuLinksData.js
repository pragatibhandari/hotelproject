var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
  region: "us-east-1",
});

console.log("writing entries to Accessibilities table");

var dynamodb = new AWS.DynamoDB.DocumentClient();

var MenuLinksData = JSON.parse(
  fs.readFileSync("../components/data/menu_links.json", "utf-8")
);
MenuLinksData.forEach(function (menuLink) {
  var params = {
    TableName: "MenuLinks",
    Item: {
      class: menuLink.class,
      href: menuLink.href,
      text: menuLink.text,
    },
  };
  dynamodb.put(params, function (err, data) {
    if (err)
      console.error(
        "Unable to load data into table for accessibility ",
        menuLink.text,
        ". Error: ",
        JSON.stringify(err, null, 2)
      );
    else console.log("Added", accessibility.name, "to table.");
  });
});
