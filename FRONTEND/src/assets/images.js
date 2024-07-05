import Honda from './ImgAcerca/icon1.jpg';
import Ford from './ImgAcerca/icon2.jpg';
import Mazda from './ImgAcerca/icon3.jpg';
import Nissan from './ImgAcerca/icon4.jpg';
import Hyundai from './ImgAcerca/icon5.jpg';
import Wolkswagen from './ImgAcerca/icon6.jpeg';
import Bmw from './ImgAcerca/icon7.jpg';
import Audi from './ImgAcerca/icon8.jpg';
import MercedesBenz from './ImgAcerca/icon9.jpg';
import Jeep from './ImgAcerca/icon10.jpg';
import Suzuki from './ImgAcerca/icon11.jpg';
import Toyota from './ImgAcerca/icon12.jpg';
import Megulars from './ImgAcerca/pro1.jpg';
import Liquimoly from './ImgAcerca/pro2.jpg';
import sikkens from './ImgAcerca/pro3.jpg';
import ChemicalGuys from './ImgAcerca/pro4.jpg';

import img1 from './ImgBienvenido/Img1.png';
import img2 from './ImgBienvenido/Img2.jpg';
import img3 from './ImgBienvenido/Img3.jpg';
import img4 from './ImgBienvenido/Img4.jpg';

import checke from './ImgMetodos/checke.jpg';
import deposito from './ImgMetodos/deposito.jpg';
import efectivo from './ImgMetodos/efectivo.jpg';
import tarjeta1 from './ImgMetodos/tarjeta1.jpg';
import tarjeta2 from './ImgMetodos/tarjeta2.png';
import tarjeta3 from './ImgMetodos/tarjeta3.png';
import tarjeta4 from './ImgMetodos/tarjeta4.png';
import tarjeta5 from './ImgMetodos/tarjeta5.jpg';
import transfer from './ImgMetodos/transfer.jpg';

import imagen1 from './ImgServ/Imagen1.jpeg';
import imagen2 from './ImgServ/Imagen2.jpeg';
import imagen3 from './ImgServ/Imagen3.jpeg';
import imagen4 from './ImgServ/Imagen4.jpeg';

import icono from './Icono.jpeg';
import logo from './Logo.jpg';
import rimagen2 from './Imagen2.jpg';

const libsImages = {
    vehiclesBrands: [
        {name: "Honda", value: Honda},
        {name: "Ford", value: Ford},
        {name: "Mazda", value: Mazda},
        {name: "Nissan", value: Nissan},
        {name: "Hyundai", value: Hyundai},
        {name: "Wolkswagen", value: Wolkswagen},
        {name: "BMW", value: Bmw},
        {name: "Audi", value: Audi},
        {name: "Mercedes Benz", value: MercedesBenz},
        {name: "Jeep", value: Jeep},
        {name: "Suzuki", value: Suzuki},
        {name: "Toyota", value: Toyota}
    ],
    productUse: [
        {name: "Megulars", value: Megulars},
        {name: "Liquimoly", value: Liquimoly},
        {name: "sikkens", value: sikkens},
        {name: "ChemicalGuys", value: ChemicalGuys}
    ],
    welcomeImage: [
        {name: "img1", value: img1},
        {name: "img2", value: img2},
        {name: "img3", value: img3},
        {name: "img4", value: img4}
    ],
    paymentMethods: [
        {name: "checke", value: checke},
        {name: "deposito", value: deposito},
        {name: "efectivo", value: efectivo},
        {name: "tarjeta1", value: tarjeta1},
        {name: "tarjeta2", value: tarjeta2},
        {name: "tarjeta3", value: tarjeta3},
        {name: "tarjeta4", value: tarjeta4},
        {name: "tarjeta5", value: tarjeta5},
        {name: "transfer", value: transfer}
    ],
    Services: [
        {name: "Enderezada y Pintura", price: "45.00$", value: imagen1},
        {name: "Reparación de colisones", price: "45.00$", value: imagen2},
        {name: "Servicio Express", price: "45.00$", value: imagen3},
        {name: "Mecanica en General", price: "45.00$", value: imagen4},
    ],
    icono: icono,
    logo: logo,
    imagen2: rimagen2
};

export default libsImages;