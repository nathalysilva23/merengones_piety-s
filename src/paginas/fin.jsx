import Cardsm from "../componentsm/Cardsm";
import { Link } from "react-router-dom";
const Fin = () => {

  return (
    <section>

      <h3 className="textoI">
  </h3>

  <h3 class="card-title display-3 fw-bolder mb-0"><center><font color="white">Manejamos variedad en sabores</font></center></h3>
  
       <p class="card-text lead fs-2"><center><font color="white">¡¡Pruébalos, te van a encantar!!</font></center></p>
       <br/> 
       
              <Cardsm />
              
              <Link className="fa"to="/carta"href="#"> <center><font color="white">Encuentra nuestra carta presionando click aquí</font></center></Link>&nbsp;&nbsp;
    </section>
          
  );
};
export default Fin;

