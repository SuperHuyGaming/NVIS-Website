import { Outlet, Route, Routes } from "react-router-dom";
import NewsList from "./NewsList";
import SingleNewsPage from "./SingleNewsPage";

function Body() {
	return (
		<>
			<Outlet />
			<Routes>
				{/* We use nested route to have the children keep the css style of the parent */}
				<Route path="/" element={<NewsList />} />
				<Route path="/:id" element={<SingleNewsPage />} />
			</Routes>
		</>
	);
}

export default Body;
