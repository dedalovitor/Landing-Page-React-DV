import React from "react";
import PropTypes from "prop-types";


const Navbar = (props) => {
	return (
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{props.title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">{props.label1}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{props.label2}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{props.label3}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">{props.label4}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



	);
};

Navbar.propTypes = {
title: PropTypes.string,
label1: PropTypes.string,
label2: PropTypes.string,
label3: PropTypes.string,
label4: PropTypes.string
};

export default Navbar;