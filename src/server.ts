import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "success", data: null });
});

app.post("/", (req, res) => {
    res.json({ status: "success", data: req.body });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
