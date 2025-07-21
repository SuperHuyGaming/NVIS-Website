import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import News from "./model/data.js";
import dotenv from "dotenv";
dotenv.config();

if (!mongoose.connection.readyState) {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => console.log("MONGO OPEN!"))
		.catch((err) => console.error("MONGO ERRR", err));
}
const PORT = process.env.PORT || 3003;
const comments = [];
const app = express();
app.use(express.json());

app.use(cors());

// Serve frontend files
// app.use(express.static(path.join(__dirname, "/client/dist")));

// Render client
app.get("/news", async (req, res) => {
	try {
		const news = await News.find({});
		console.log("Fetched news:", news); // log this!
		res.json(news);
	} catch (e) {
		console.log("Error getting all news", e);
	}
});
app.get("/news/:id", async (req, res) => {
	try {
		const post = await News.findById(req.params.id);
		if (!post) return res.status(404).json({ error: "Post not found" });
		res.json(post);
	} catch (e) {
		console.error("Error fetching single post", e);
		res.status(500).json({ error: "Failed to fetch post" });
	}
});

app.post("/post/new", async (req, res) => {
	const { post } = req.body;
	try {
		const newPost = new News(post);
		await newPost.save();
		res.status(201).json(newPost);
	} catch (e) {
		console.error("Error saving new post", e);
		res.status(500).json({ error: "Failed to save post" });
	}
});

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/client/dist/index.html"));
// });

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
