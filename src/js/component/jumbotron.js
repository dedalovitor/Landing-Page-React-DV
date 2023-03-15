import React from "react";
import PropTypes from "prop-types";



const Jumbotron = (props) => {
	return (
        <div class="container-fluid py-5 bg-light mt-5 mb-5">
        <h1 class="display-5 fw-bold">{props.titleJumbotron}</h1>
        <p class="col-md-8 fs-4">{props.descriptionJumbotron}</p>
        <button class="btn btn-primary btn-lg" type="button">{props.buttonLabelJumbotron}</button>
      </div>
	);
};

Jumbotron.propTypes = {
	titleJumbotron: PropTypes.string,
	descriptionJumbotron: PropTypes.string,
	buttonLabelJumbotron: PropTypes.string
};

export default Jumbotron;
