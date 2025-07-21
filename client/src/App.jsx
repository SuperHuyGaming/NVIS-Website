import Body from "./News/Body";
import Header from "./Header/Header";
import Jokes from "./Components/Jokes";
import Comments from "./Comments";
import About from "./AboutUs/About";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SingleNewsPage from "./News/SingleNewsPage";
import FrontPage from "./Sign In Page/FrontPage";
import Box from "@mui/material/Box";
import NewsEdit from "./Admin/NewsEdit";
import ScrollTop from "./ScrollTop";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<ScrollTop />

			{/* Main content container with margin */}
			<Box sx={{ marginTop: "10px", padding: "20px" }}>
				<Routes>
					{/* Home page */}
					<Route path="/*" element={<Body />} />

					{/* About */}
					<Route path="/About" element={<About />} />

					{/* Sign In */}
					<Route path="/SignIn" element={<FrontPage />} />

					<Route path="/Post" element={<NewsEdit isEdit={false} />} />

					{/* Comments */}
					<Route path="/Comments" element={<Comments />} />

					{/* Jokes */}
					<Route path="/Jokes" element={<Jokes />} />

					{/* Redirect unknown routes */}
					<Route path="*" element={<Navigate to={"/"} />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
}
