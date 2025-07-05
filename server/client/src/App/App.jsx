import Body from "../Body";
import Header from "./Header";
import Jokes from "../Components/Jokes";
import Comments from "../Comments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleNewsPage from "../Body/News/SingleNewsPage";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				{/* Home page */}
				<Route
					path="/"
					element={
						<>
							<Body />
							<Jokes />
							<Comments />
						</>
					}
				/>
				{/* Single news article page */}
				<Route path="/news/cats" element={<SingleNewsPage />} />
			</Routes>
		</BrowserRouter>
	);
}
