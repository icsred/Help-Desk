import React from "react";

const Navbar = () => {
  return (

    <section class="sticky-top" id="barra">

    <nav class="navbar navbar-expand-sm bg-danger navbar-light py-1 ">

      <button data-target="#navbarNav" class="navbar-toggler ml-auto" type="button" data-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
          
      </button>

      <div class="collapse navbar-collapse d-flex mb-auto" id="navbarNav">
            
        {/* <a class="navbar-brand ml-5"><img src="../static/logoics.png" alt="Logo"></a> */}

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto align-top">
            <li class="nav-item active">
                <a class="nav-link text-white" href="{{ url_for('panelagente') }} " >Panel de agente <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item dropdown mr-3">
              <a href="#" class="nav-link dropdown-toggle text-white" data-toggle="dropdown"
                ><i class="fas fa-user"></i> Bienvenido </a
              >
              <div class="dropdown-menu">
                <a href="" class="dropdown-item"
                  ><i class="fas fa-user-circle"></i> Perfil</a
                >
  
                <a href="#" class="dropdown-item"
                  ><i class="fas fa-cog"></i> Configuraciones</a
                >
              </div>
            </li>

            <li class="nav-item active">
                <a class="nav-link text-white" href=""><i class="fas fa-sign-out-alt"></i> Salir <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  )
}


export default Navbar;