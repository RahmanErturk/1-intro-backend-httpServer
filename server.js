// import http from 'http'; // ES6 Modules

const http = require("http"); // CommonJS Modules

// console.log(http);
console.log("starting server ...");

const server = http.createServer((request, response) => {
  console.log("getting a request!", request.method, request.url);

  switch (request.url) {
    case "/photos": {
      const photos = [
        "https://images.pexels.com/photos/14029041/pexels-photo-14029041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/14532811/pexels-photo-14532811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];
      console.log("requested photos");
      response.setHeader("Content-Type", "image/jpeg");
      response.write(JSON.stringify({ photos }));
      response.end();
      break;
    }
    case "/albums": {
      console.log("requested albums");
      response.write("my albums");
      response.end();
      break;
    }
  }
});

server.listen(4000);
