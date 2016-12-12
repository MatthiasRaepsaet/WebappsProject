const express = require("express");
const app = express();
app.listen("3000", function () {
    console.log("listening on port 3000");
    
    
});

app.get("/", function (req, res) {
    res.sendFile("/users/matthias/desktop/webappsproject/backend/" + "index.html")
    }
)