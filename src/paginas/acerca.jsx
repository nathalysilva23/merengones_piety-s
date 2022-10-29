const Redes = () => {
    
  const instagram="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-logotipo-de-icono-de-instagram.png"

  const facebook="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"

  const whatsapp="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
  const mere="https://scontent.fpso1-1.fna.fbcdn.net/v/t1.6435-9/157307340_215565006921672_7858873447705534906_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5GbclJ4gbR4AX8Qwox-&_nc_ht=scontent.fpso1-1.fna&oh=00_AfCfHP9x7GQHCvrem96JgdlfMWq0t2s82eV90jGJTqgEZg&oe=63834B74"
  
  return (
      <div className="imagenh">
         <br/> 
         <br/> 
         <h5 className="ph"class="card-title display-3 fw-bolder mb-0"><center><font color="white">Contáctanos a través de nuestras redes sociales</font><center/></center></h5>

 <br/> 
         <br/> 


      <a className="face" href="https://www.facebook.com/profile.php?id=100049350886934"> <img src={facebook} height="200px" width="200px"/> </a>  &nbsp; &nbsp; &nbsp; &nbsp; 
      
      <a className="face" href="https://instagram.com/merengonespietys?igshid=YmMyMTA2M2Y="><img src={instagram} height="200px" width="200px"/> </a> &nbsp; &nbsp; &nbsp; &nbsp; 

      <a className="face" href="https://wa.me/573114026317"><img src={whatsapp} height="200px" width="200px" /> </a> &nbsp; &nbsp; &nbsp; &nbsp;
 
 
      <br/> <br/>
      <p class="card-text lead fs-2"> <center><font color="white">¡¡Siguénos y apoya nuestro emprendimiento!!</font></center></p>

      <br/> 
         
      <div className="imagen1">
        <img src={mere} height="250px" width="250px"/>
      </div>
  </div>
  );
};
export default Redes;