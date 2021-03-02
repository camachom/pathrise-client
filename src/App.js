import { Router } from "@reach/router";
import Boards from "./components/Boards/Boards";
import Jobs from "./components/Jobs/Jobs";

function App() {
	return (
		<Router>
			<Boards path="/" />
			<Jobs path="/boards/:boardId" />
		</Router>
	);
}

export default App;
