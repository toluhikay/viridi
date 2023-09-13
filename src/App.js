import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavigationComponent/navigation";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import Services1 from "./components/Services/services1";
import Contact from "./components/Contact/contact";
import ScrollToTop from "./scroll";
import { Fragment, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);
	return (
		<Fragment>
			<ScrollToTop>
				<Toaster />
				<div className='overflow-hidden'>
					<Routes>
						<Route path='/' element={<Navigation />}>
							<Route index element={<LandingPage />}></Route>
							<Route path='/about' element={<About />}></Route>
							<Route path='/services' element={<Services1 />}></Route>
							<Route path='/contact' element={<Contact />}></Route>
						</Route>
					</Routes>
				</div>
				<Footer />
			</ScrollToTop>
		</Fragment>
	);
}

export default App;
