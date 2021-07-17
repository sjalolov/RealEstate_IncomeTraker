import React from "react";
import './Menu.css';


const Menu = () => (

    <body>
      <div className="menu-page">
        <div className="left-box">
        <a href="/sign-in" className="left-btn">Dashboard</a>
        <nav id="nav">
			<div class="innertube">
			<ul>
				<li><a href="/sign-in">Link 1</a></li>
				<li><a href="/sign-in">Link 2</a></li>
				<li><a href="/sign-in">Link 3</a></li>
				<li><a href="/sign-in">Link 4</a></li>
				<li><a href="/sign-in">Link 5</a></li>
			</ul>
			</div>
		</nav>
        </div>
      </div>
    </body>
);

export default Menu;
