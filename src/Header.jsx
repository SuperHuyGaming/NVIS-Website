import "./Header.css";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Header() {
	const sx = {
		color: "black",
		backgroundColor: "#ffd700",
		borderColor: "#bd2626",

		"&:hover": {
			backgroundColor: "#DAF5FF",
			color: "#2192FF",
			fontWeight: "bold",
		},
	};

	return (
		<header className="Header">
			<img src="/logo.png" className="Logo" alt="Logo" />

			<div className="Buttons">
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					Home
				</Button>
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					About us
				</Button>
			</div>
		</header>
	);
}
