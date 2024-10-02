const connect = require("connect");
const serveStatic = require("serve-static");

var app = connect();

app.use(serveStatic('./', { index: ["index.html"] }));
app.listen(3004, () => console.log("Server running on http://localhost:3004..."));
