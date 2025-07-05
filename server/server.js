import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());

// Serve frontend files
// app.use(express.static(path.join(__dirname, "/client/dist")));

const comments = [
	{ username: "htruon5", comment: "Lol that's dope!" },
	{ username: "SuperHuyGaming", comment: "ggwp" },
	{ username: "alwayssaydope", comment: "Dope Dope Dope Dope!" },
	{ username: "donald", comment: "trump" },
];
// Render client

app.get("/comments", (req, res) => {
	res.json(comments);
});
// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/client/dist/index.html"));
// });
app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment });
	res.status(201).json({ message: "Comment added." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
