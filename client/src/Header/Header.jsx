import "./Header.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
			<Link to={"/"}>
				<img src="/logo.png" className="Logo" alt="Logo" />
			</Link>

			<div className="Buttons">
				<Link to={"/"}>
					<Button className="HeaderButton" variant="outlined" sx={sx}>
						Home
					</Button>
				</Link>
				<Link to={"/About"}>
					<Button className="HeaderButton" variant="outlined" sx={sx}>
						About us
					</Button>
				</Link>
				<Link to={"/SignIn"}>
					<Button className="HeaderButton" variant="outlined" sx={sx}>
						Sign in
					</Button>
				</Link>
				<Link to={"/Post"}>
					<Button className="HeaderButton" variant="outlined" sx={sx}>
						Create Post
					</Button>
				</Link>
			</div>
		</header>
	);
}
