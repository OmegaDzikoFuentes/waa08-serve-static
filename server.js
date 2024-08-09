const http = require('http');
const fs = require("fs");

const getMimeTypes = (ext) => {
  const mimeTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "jpg": "image/jpeg",
    "png": "image/png",
  };
  return mimeTypes[ext] || undefined;
}


const server = http.createServer((req, res) => {

  //phase 2 - serving up a whole folder
  if (req.url.startsWith("/static")) {
    const filePath = req.url.split("/static")[1];
    const ext = filePath.split(".")[1];
    const contentType = getMime(filePath);
    console.log("FILE PATH:", filePath, "Content-Type:", contentType);
    res.setHeader("Content-Type",)
    const asset = fs.readFileSync(`./assets${filePath}`);
    res.statusCode = 200;
    return res.end(asset);

  }
  //phase 1 - sending static html
  const index = fs.readFileSync("./index.html");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  return res.end(index);
});

const port = 5005;

server.listen(port, () => console.log('Server is listening on port', port));
