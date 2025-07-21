import mongoose from "mongoose";
mongoose
	.connect("mongodb://localhost:27017/newsPost")
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
