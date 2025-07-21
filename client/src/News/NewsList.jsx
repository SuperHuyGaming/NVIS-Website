import * as React from "react";
import Box from "@mui/material/Box";
import News from "./News.jsx";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import SingleNewsPage from "./SingleNewsPage.jsx";

function NewsList() {
	const { state } = useLocation();
	const [news, setNews] = useState([]);

	useEffect(() => {
		if (state) {
			// handle location state result
		}
	}, [state]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("http://localhost:3003/news");
				setNews(response.data);
			} catch (e) {
				console.log("Error fetching news posts", e);
			}
		})();
	}, []);

	return (
		<Box>
			<h1 style={{ textAlign: "center" }}>News and Updates</h1>
			<div>
				{news.map((item) => {
					const formattedDate = dayjs(item.date).format(
						"MMMM D, YYYY"
					);

					return (
						<Link to={`/${item._id}`} key={item._id}>
							<News
								src={item.src}
								title={item.title}
								category={item.category}
								author={item.author}
								date={formattedDate}
								contnet={item.content}
							/>
						</Link>
					);
				})}
			</div>
			<Routes>
				<Route path="/:id" element={<SingleNewsPage />} />
			</Routes>
		</Box>
	);
}

export default NewsList;
