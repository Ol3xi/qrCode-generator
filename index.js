import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"
import { log } from "console";

inquirer
  .prompt([
    {
        "name": "URL",
        "message": "Insert here your URL: ",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log('url è ', url)
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); 
})
  .catch((error) => {
    if (error.isTtyError) {
        console.log("there is an error", error)
    } else {
      console.log("there is an error", error)
    }
  });