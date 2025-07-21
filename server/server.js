import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import News from "./model/data.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Routes
app.get("/news", async (req, res) => {
	try {
		const news = await News.find({});
		console.log("Fetched news:", news);
		res.json(news);
	} catch (e) {
		console.error("Error getting all news", e);
		res.status(500).json({ error: "Failed to fetch news" });
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

// Connect to MongoDB and start server
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log(" Connected to MongoDB");
		app.listen(PORT, () => {
			console.log(` Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error(" MongoDB connection error:", err);
	});
