const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Success" });
});

app.get("/api", (req, res) => {
    res.json({
        id: 1,
        name: "Benoit",
        role: "Programmer",
    });
});

app.get("/about", (req, res) => {
    res.send("This is the about page!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});