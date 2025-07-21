import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3003;
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MONGO OPEN!");
	})
	.catch((err) => {
		console.error("MONGO ERRR", err);
	});

const newsSchema = new mongoose.Schema({
	src: {
		type: String,
		required: true,
	},
	title: { type: String, required: true },
	category: { type: String, required: true },
	author: { type: String, required: true },
	content: {
		type: String,
	},
	date: { type: Date, required: true },
});

const News = mongoose.model("News", newsSchema);

export default News;
