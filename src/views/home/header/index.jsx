import * as React from 'react';

function Header() {
    return (
      <div class="container-fluid bg-light">
        <nav className="navbar container navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="#">Weather24</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse container navbar-collapse" id="collapsibleNavId">
              By Chirag & 
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;