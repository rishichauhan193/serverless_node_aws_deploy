const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/get", (req, res) => {
    res.send("Hello, Serverless EC2!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
