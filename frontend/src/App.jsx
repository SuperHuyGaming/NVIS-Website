import Body from "./Body";
import Header from "./Header";
import Jokes from "./Jokes";
import Comments from "./Comments";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Jokes />
			<Comments />
		</div>
	);
}
