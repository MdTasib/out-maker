import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar/Navbar";
import Collections from "./pages/collections/collections";
import Services from "./pages/home/services";
import Footer from "./shared/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
			</Routes>
			<Services />
			<Footer />
		</>
	);
}

export default App;
