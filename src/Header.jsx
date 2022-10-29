import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4 " href="#"><font color="red">PIETY`S MERENGONES</font></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        &nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                      <Link className="fc" to="inicio"href="#"><font color="red">Informaciòn</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link className="fc" to="fin"href="#"><font color="red">Productos</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link className="fc" to="acerca"href="#"><font color="red">Contacto</font></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </li>

      </ul>

    </div>
  </div>
</nav>
                  </div>
    );
}

export default Navbar;

