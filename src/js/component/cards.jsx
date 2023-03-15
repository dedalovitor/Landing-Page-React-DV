import React from "react";
import Style from "../../styles/cards.css";

const Cards = () => {
	return (
		<div className="card-group">
			<div className="card">
		  			<img src="https://www.modis.co.jp/-/media/Images/Modis/www/candidate/insight/thumbnail_column_99.jpg" className="card-img-top" alt="HTML5 Structure"/>
		  		<div className="card-body">
					<h5 className="card-title">HTML5</h5>
					<p className="card-text">En esta primera etapa hemos aprendido el lenguaje de etiquetas para estructurar una página web. Este lenguaje de marcado nos permite crear la estructura de nuestro documento HTML.</p>
		  		</div>
				<div class="card-footer">
					<a href="https://es.wikipedia.org/wiki/HTML5" class="btn btn-primary">Go to HTML5</a>
     			</div>
			</div>
			<div className="card">
		  			<img src="https://www.jotform.com/blog/wp-content/uploads/2008/07/photo-1505685296765-3a2736de412f.jpeg" className="card-img-top" alt="CSS3 Structure"/>
		  		<div className="card-body">
					<h5 className="card-title">CSS3</h5>
					<p className="card-text">En la segunda etapa ya teníamos la estructura del documento HTML, pero nos hacía falta hacerlo bonito, hacerlo atractivo, así que aprendimos CSS3 para agregar colores, estilos y diferentes tipos de letra.</p>
		  		</div>
		  		<div class="card-footer">
					<a href="https://es.wikipedia.org/wiki/CSS" class="btn btn-primary">Go to CSS3</a>
     			</div>
			</div>
			<div className="card">
					<img src="https://blog.hubspot.es/hubfs/como-hacer-una-pagina-web-en-html.jpg" className="card-img-top" alt="Javascript Structure"/>
		  		<div className="card-body">
					<h5 className="card-title">JavaScript</h5>
					<p className="card-text">En la tercera etapa ya teniamos una pagina web bien estructurada y hermosa a nivel visual gracias a los conocimientos aprendidos, pero nos faltaba darle vida y poder interactuar, asi que aprendimos Javascript y JS DOM.</p>
		  		</div>
				<div class="card-footer">
					<a href="https://es.wikipedia.org/wiki/JavaScript" class="btn btn-primary">Go to JavaScript</a>
     			</div>
			</div>
			<div className="card">
		  			<img src="https://miro.medium.com/max/1400/1*jNgKcP0Gi-5nokNa1vzwjg.jpeg" className="card-img-top" alt="React Structure"/>
		  		<div className="card-body">
					<h5 className="card-title">React</h5>
					<p className="card-text">¡Ahora estamos aprendiendo React y este proyecto es para afianzar los primeros conceptos, con JS DOM sentía que era bastante complicado interactuar con los elementos HTML y JS, pero gracias a React todo es más fácil!</p>
		  		</div>
		  		<div class="card-footer">
					<a href="https://es.wikipedia.org/wiki/React" class="btn btn-primary">Go to React</a>
     			</div>
		</div>
	  </div>
	);
};

export default Cards;
