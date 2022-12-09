
const Presentacion = () => {
    const imagen123 = "img1.png";

    return (
      
     <section>
      <br/> 
         <br/> 
         <br/>
         <h12 className="h12">Haz tu día feliz con los deliciosos merengones que encontrarás aquí</h12>

  <br/> 
       <p class="card-text lead fs-2"> <center><font color="white">¡¡Manejamos productos comestibles de exelente calidad!!</font></center></p>

           <div className="imagen123">
        <img alt="o" src={imagen123} height="500px" width="500px" />
      </div>
      <h5 className="ph"class="card-title display-3 fw-bolder mb-0"><center><font color="white">¡No te vayas sin antes probarlos!</font><center/></center></h5>
  
        </section>
        
  
    );
  };
  export default Presentacion;