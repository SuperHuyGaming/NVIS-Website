import "./Header.css";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Header() {
	const sx = {
		color: "black",
		backgroundColor: "#DDDDDD",

		"&:hover": {
			backgroundColor: "#DAF5FF",
			color: "#2192FF",
		},
	};

	return (
		<header className="Header">
			<img src="./library/nvisLogo.png" className="Logo" alt="Logo" />
			<div className="Buttons">
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					Home
				</Button>
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					About us
				</Button>
				<Button className="HeaderButton" variant="outlined" sx={sx}>
					Contacts
				</Button>
			</div>
		</header>
	);
}
