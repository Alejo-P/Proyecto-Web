import { Link } from 'react-router-dom'
import Video from '../assets/VideoOficial.mp4'

const HomePage = () => {
  return (
    <div>
        <section id="inicio" className="inicio">
            <div className="contenido-inicio">
                <h1><em>Empresa dedicada al mantenimiento, cuidado y reparación de tu vehículo.</em></h1>
                <div className="contenedor-video">
                    <video width="640 " height="360" controls>
                        <source src={Video} type="video/mp4"/>
                    </video>
                </div>
                <div className="siguenos">
                    <p>Siguenos en todas nuestras redes Sociales</p>
                </div>
                <div className="redes">
                    <Link to="https://www.facebook.com/fullprestige20" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="https://www.instagram.com/full.prestige/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="https://www.tiktok.com/@fullprestige?is_from_webapp=1&sender_device=pc" target="_blank"><i className="fa-brands fa-tiktok"></i></Link>
                    <Link to="https://www.youtube.com/@fullprestige357/videos" target="_blank"><i className="fa-brands fa-youtube"></i></Link>
                    <Link to="https://wa.me/593980688763" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                </div>

                <nav className="nav2">
                    <ul>
                        <li><a href="#metodos">Métodos de Pago</a></li>
                    </ul>
                </nav>   
            </div>
        </section>

        <section id="acerca" class="acerca">
            <div class="contenido-seccion">
                <h2>NOSOTROS</h2>
            
                <p>Full Prestige es una empresa consolidada desde....., contamos con una amplia trayectoria y conformado por un excelente equipo de trabajo (EX TECNICOS DE TOYPTA) Nuestra mision, complacer y hacer realidad las espectativas de cada uno de nuetsros clientes. 
                    Nuestro objetivo mejorar y superar los requerimientos para satisfaccion de la empresa, nuestro equipo y sobretodo nuestros clientes.
                    Contamos con las mejores tecnologias y un excelente equipo de trabajo, con años de experiencia, ex tecnicos de Toyota.
                    dam laudantium tenetur repudiandae, suscipit rem esse recusandae, distinctio quo labore. Non ratione, s
                    imilique consequuntur quo consequatur repudiandae perspiciatis!
                </p>
                <h3>Somos Multimarca</h3>
                <div class="multimarca">
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon1.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon2.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon3.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon4.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon5.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon6.jpeg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon7.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon8.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon9.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon10.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon11.jpg" alt="">
                    </div>
                    <div class="marcas">
                        <img src="Imagenes/ImgAcerca/icon12.jpg" alt="">
                    </div> 
                
                </div>
                <h3>Trabajamos con los mejores productos</h3> <br>
                <div class="Productos"> <br>


                    <div class="producto">
                        <img src="Imagenes/ImgAcerca/pro1.jpg" alt="">
                    </div>
                    <div class="producto">
                        <img src="Imagenes/ImgAcerca/pro2.jpg" alt="">
                    </div>
                    <div class="producto">
                        <img src="Imagenes/ImgAcerca/pro3.jpg" alt="">
                    </div>
                    <div class="producto">
                        <img src="Imagenes/ImgAcerca/pro4.jpg" alt="">
                    </div>
                
            </div>
        </section>
    </div>
  )
}

export default HomePage