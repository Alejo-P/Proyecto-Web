import { Link } from 'react-router-dom'
import Video from '../assets/VideoOficial.mp4'
import Info from '../assets/images'

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

        <section id="acerca" className="acerca">
            <div className="contenido-seccion">
                <h2>NOSOTROS</h2>
            
                <p>Full Prestige es una empresa consolidada desde....., contamos con una amplia trayectoria y conformado por un excelente equipo de trabajo (EX TECNICOS DE TOYPTA) Nuestra mision, complacer y hacer realidad las espectativas de cada uno de nuetsros clientes. 
                    Nuestro objetivo mejorar y superar los requerimientos para satisfaccion de la empresa, nuestro equipo y sobretodo nuestros clientes.
                    Contamos con las mejores tecnologias y un excelente equipo de trabajo, con años de experiencia, ex tecnicos de Toyota.
                    dam laudantium tenetur repudiandae, suscipit rem esse recusandae, distinctio quo labore. Non ratione, s
                    imilique consequuntur quo consequatur repudiandae perspiciatis!
                </p>
                <h3>Somos Multimarca</h3>
                <div className="multimarca">
                    {Info.vehiclesBrands.map((image) => {
                        return (
                            <div key={image.name} className="marcas">
                                <img src={image.value} alt=""/>
                                <p>{image.name}</p>
                            </div>
                        )
                    })}
                </div>
                <h3>Trabajamos con los mejores productos</h3> <br/>
                <div className="Productos"> <br/>
                    {
                        Info.productUse.map((image) => {
                            return (
                                <div key={image.name} className="producto">
                                    <img src={image.value} alt=""/>
                                    <p>{image.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <section id="servicios" className="servicios">
            <div className="contenido-seccion">
                <h2>SERVICIOS</h2>
                <div className="galeria">
                    {
                        Info.Services.map((service) => {
                            return (
                                <div key={service.name} className="proyecto">
                                    <img src={service.value} alt=""/>
                                    <h3>{service.name}</h3>
                                    <h4>{service.price}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <section id="contacto" className="contacto">
            <div className="contenido-seccion">
                <h2>CONTACTANOS</h2>
                <div className="fila">
                    
                    <div className="col">
                        <input type="text" placeholder="Tu nombre"/>
                        <input type="text" placeholder="Numero Teléfono"/>
                        <input type="text" placeholder="Dirección de correo"/>
                        <input type="text" placeholder="Tema"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                        <button>
                            Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>

                    <div className="col">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7574.439967442809!2d-78.45197548798788!3d-0.33444451232886957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd62fd7cd6c3%3A0xdfe040bb17af6d28!2sFull%20Prestige!5e0!3m2!1ses!2sec!4v1707584098101!5m2!1ses!2sec" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="info">
                            <ul>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i>
                                    Sangolqui-España 686 (Detrás de la Nova Clinica del Valle)
                                </li>
                                <li>
                                    <i className="fa-brands fa-whatsapp"></i>
                                    Contactame: 0980688763
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    Email: miguel_sdq@hotmail.es
                                </li>
                                <li>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    Horario de atención: <br/>
                                    Lunes-Viernes (8:00 am - 5:00 pm) <br/>
                                    Sabado (8:00 am - 1:00 pm) <br/>
                                    Domingo (No hay atención)
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="metodos" className="metodos">
            <div className="contenido-seccion">
                <h2>MÉTODOS DE  PAGO</h2>
                <h4>Tarjetas de crédito y débito</h4>
                <div className="galeria">
                    {
                        Info.paymentMethods.map((image) => {
                            return (
                                <div key={image.name} className="proyecto">
                                    <img src={image.value} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <footer>
            <p>© 2024 Full Prestige</p>
            <h2>FRONTED: Silvia Chaluisa </h2>
            <h2>BACKEND: Marcelo Pinzón</h2>
            <a href="#inicio" className="arriba">
                <i className="fa-solid fa-angles-up"></i>
            </a>
        </footer>
    </div>
  )
}

export default HomePage