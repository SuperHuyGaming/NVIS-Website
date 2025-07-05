import * as React from "react";
import Box from "@mui/material/Box";
import News from "./News/News.jsx";
import { Link } from "react-router-dom";

function Body() {
	const newsItems = [
		{
			src: "/GingerCat.jpg",
			title: "Pretty Ginger Cat Seen On Highway!",
			category: "ANIMALS",
			author: "Huy Truong",
			date: "June 19, 2020",
		},
		{
			src: "/VietnamFlag.png",
			title: "Vietnam Flag Raised On Independence Day!",
			category: "NEWS",
			author: "John Doe",
			date: "September 2, 2023",
		},
		{
			src: "/FatherDay.png",
			title: "Happy Father's Day Celebrations Worldwide!",
			category: "EVENTS",
			author: "Emma Smith",
			date: "June 16, 2024",
		},
	];

	return (
		<Box>
			<h1 style={{ textAlign: "center" }}>News and Updates</h1>
			<div>
				{newsItems.map((item, index) => (
					<Link to={"/news/cats"}>
						<News
							key={index}
							src={item.src}
							title={item.title}
							category={item.category}
							author={item.author}
							date={item.date}
						/>
					</Link>
				))}
			</div>
		</Box>
	);
}

export default Body;
