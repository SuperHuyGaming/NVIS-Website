import News from "./data.js";
import mongoose from "mongoose";

mongoose
	.connect("mongodb://localhost:27017/newsPost")
	.then(() => {
		console.log("MONGO OPEN!");
	})
	.catch((err) => {
		console.error("MONGO ERRR", err);
	});

const newsItems = [
	{
		src: "/GingerCat.jpg",
		title: "Pretty Ginger Cat Seen On Highway!",
		category: "ANIMALS",
		author: "Huy Truong",
		date: "June 19, 2020",
		content:
			"A fluffy ginger cat surprised commuters this morning as it calmly strolled along the shoulder of the I-495 highway. Witnesses say the cat appeared unbothered by the passing traffic and even paused to groom itself near the guardrail. Authorities safely retrieved the cat and confirmed it was uninjured. The cat has since been taken to a local shelter while efforts are made to reunite it with its owner.",
	},
	{
		src: "/VietnamFlag.png",
		title: "Vietnam Flag Raised On Independence Day!",
		category: "NEWS",
		author: "John Doe",
		date: "September 2, 2023",
		content:
			"In a powerful celebration of national pride, the Vietnamese flag was raised across the country today to mark Independence Day. Thousands gathered in Hanoi to attend the official ceremony, which featured a military parade, musical performances, and speeches honoring the country’s history. Citizens also participated in cultural festivals and fireworks displays in cities nationwide.",
	},
	{
		src: "/FatherDay.png",
		title: "Happy Father's Day Celebrations Worldwide!",
		category: "EVENTS",
		author: "Emma Smith",
		date: "June 16, 2024",
		content:
			"Families around the world celebrated Father's Day today by honoring the dads and father figures who have shaped their lives. From homemade breakfasts to heartfelt gifts, social media was filled with touching tributes and childhood photos. In many countries, businesses offered special promotions and events, making it a memorable day for fathers everywhere.",
	},
];

News.insertMany(newsItems)
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});
