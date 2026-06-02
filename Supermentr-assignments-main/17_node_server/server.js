const http = require("http");

const server = http.createServer((req, res) => {

    // Home Route
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Home Page  of node server");
    }

    // About Route
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is About Page");
    }

    // Contact Route
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Contact us at navneethareddy59@gmail.com");
    }

    // 404 Route
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found ❌");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});