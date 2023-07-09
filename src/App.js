import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar/Navbar";
import Collections from "./pages/collections/collections";
import Services from "./pages/home/services";
import Footer from "./shared/Footer/Footer";
import Blog from "./pages/blog/Blog";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/blog' element={<Blog />} />
			</Routes>
			<Services />
			<Footer />
		</>
	);
}

export default App;
