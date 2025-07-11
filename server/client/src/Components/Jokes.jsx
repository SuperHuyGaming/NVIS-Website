import { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import Button from "@mui/material/Button";

export default function Jokes() {
	const sx = {
		color: "black",
		backgroundColor: "#DDDDDD",

		"&:hover": {
			backgroundColor: "#DAF5FF",
			color: "#2192FF",
		},
	};

	const [joke, setJoke] = useState("");
	async function findJoke() {
		try {
			const apiLink = await axios.get("https://icanhazdadjoke.com/", {
				headers: { Accept: "application/json" },
			});
			setJoke(apiLink.data.joke);
		} catch (e) {
			console.error("Failed to fetch joke:", e);
		}
	}
	useEffect(() => {
		findJoke();
	}, []);
	return (
		<div>
			<Button
				className="HeaderButton"
				variant="outlined"
				sx={sx}
				onClick={findJoke}
			>
				Click here for dad's joke!
			</Button>
			<h3>{joke}</h3>
		</div>
	);
}
