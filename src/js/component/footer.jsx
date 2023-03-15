import React from "react";
import Style from "../../styles/footer.css";

const Footer = () => {
	return (
  			<div class="footer-dark">
				<footer>
					<div class="container-fluid">
                		<div class="row">	
                    	<div class="col item social">
							<a href="https://4geeks.com/es"><i class="bi bi-globe"></i></a>
							<a href="https://github.com/4GeeksAcademy"><i class="bi bi-github"></i></a>
							<a href="https://www.facebook.com/4GeeksAcademyES/"><i class="bi bi-facebook"></i></a>
							<a href="https://twitter.com/4geeksacademyes"><i class="bi bi-twitter"></i></a>
						</div>
                	</div>
                		<p class="copyright">4Geeks Academy© 2022: David Valero & Gabriel Ferreiro</p>
            		</div>
        		</footer>
    		</div>
	);
};

export default Footer;
