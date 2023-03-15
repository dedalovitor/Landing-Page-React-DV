import React from "react";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";


//include images into your bundle

//create your first component

const Home = () => {
	return (
		<>
			<Navbar
				title="Start Bootstrap"
				label1="Home"
				label2="About"
				label3="Services"
				label4="Contact"
			/>
			<div className= "container">
				<Jumbotron
					titleJumbotron="A warm welcome!"
					descriptionJumbotron="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					buttonLabelJumbotron="Call to action!"
				/>
				<Cards />
			</div>
			<Footer />
		</>
	);
};

export default Home;

