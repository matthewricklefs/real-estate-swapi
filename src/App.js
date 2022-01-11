import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Pages/Home/Home";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</header>
		</div>
	);
}

export default App;
