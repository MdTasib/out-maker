import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./shared/Navbar/Navbar";
import Collections from "./pages/collections/collections";
import Services from "./pages/home/services";
import Footer from "./shared/Footer/Footer";
import Blog from "./pages/blog/Blog";
import Product from "./pages/product/product";
import Contact from "./pages/contact/Contact";
import AllBlogs from "./pages/all-blogs/AllBlogs";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/collections' element={<Collections />} />
				<Route path='/all-blogs' element={<AllBlogs />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/product' element={<Product />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Services />
			<Footer />
		</>
	);
}

export default App;
