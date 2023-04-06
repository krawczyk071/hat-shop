import React from "react";

const Navbar = () => {
  return (
    <div class="header">
      <nav class="navbar layout-lg">
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="#">Home</a>
          </li>
          <li class="navbar__item">Explore</li>
          <li class="navbar__item">Sale</li>
        </ul>
        <div class="navbar__logo">
          <div class="navbar__logo-bg">
            <span>BigHead</span>
          </div>
        </div>
        <ul class="navbar__list">
          <li class="navbar__item">Basket (1)</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
