const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const comments = [
	{
		username: "htruon5",
		comment: "Lol that's dope!",
	},
	{
		username: "SuperHuyGaming",
		comment: "ggwp",
	},
	{
		username: "alwayssaydope",
		comment: "Dope Dope Dope Dope!",
	},
	{
		username: "donald",
		comment: "trump",
	},
];

app.get("/comments", (req, res) => {
	res.json(comments);
});

app.post("/comments", (req, res) => {
	const { username, comment } = req.body;
	comments.push({ username, comment });
	// res.redirect("/comments");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
