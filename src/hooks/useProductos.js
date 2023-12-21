import {useEffect, useState} from "react";
import imagen1 from '../imagenes/productos/1.jpg';
import imagen2 from '../imagenes/productos/2.jpg';
import imagen3 from '../imagenes/productos/3.jpg';
import imagen4 from '../imagenes/productos/4.jpg';
import imagen5 from '../imagenes/productos/5.jpg';
import imagen6 from '../imagenes/productos/6.jpg';
import imagen7 from '../imagenes/productos/7.jpg';
import imagen8 from '../imagenes/productos/8.jpg';
import imagen9 from '../imagenes/productos/9.jpg';
import imagen10 from '../imagenes/productos/10.jpg';
import imagen11 from '../imagenes/productos/11.jpg';
import imagen12 from '../imagenes/productos/12.jpg';
import imagen13 from '../imagenes/productos/13.jpg';
import imagen14 from '../imagenes/productos/14.jpg';
import imagen15 from '../imagenes/productos/15.jpg';
import imagen16 from '../imagenes/productos/16.jpg';
import imagen17 from '../imagenes/productos/17.jpg';
import imagen18 from '../imagenes/productos/18.jpg';
import imagen19 from '../imagenes/productos/19.jpg';
import imagen20 from '../imagenes/productos/20.jpg';
import imagen21 from '../imagenes/productos/21.jpg';
import imagen22 from '../imagenes/productos/22.jpg';
import imagen23 from '../imagenes/productos/23.jpg';
import imagen24 from '../imagenes/productos/24.jpg';
import imagen25 from '../imagenes/productos/25.jpg';
import imagen26 from '../imagenes/productos/26.jpg';
import imagen27 from '../imagenes/productos/27.jpg';
import imagen28 from '../imagenes/productos/28.jpg';
import imagen29 from '../imagenes/productos/29.jpg';
import imagen30 from '../imagenes/productos/30.jpg';
import imagen31 from '../imagenes/productos/31.jpg';
import imagen32 from '../imagenes/productos/32.jpg';
import imagen33 from '../imagenes/productos/33.jpg';
import imagen34 from '../imagenes/productos/34.jpg';
import imagen35 from '../imagenes/productos/35.jpg';
import imagen36 from '../imagenes/productos/36.jpg';
import imagen37 from '../imagenes/productos/37.jpg';
import imagen38 from '../imagenes/productos/38.jpg';
import imagen39 from '../imagenes/productos/39.jpg';
import imagen40 from '../imagenes/productos/40.jpg';
import imagen41 from '../imagenes/productos/41.jpg';
import imagen42 from '../imagenes/productos/42.jpg';
import imagen43 from '../imagenes/productos/43.jpg';
import imagen44 from '../imagenes/productos/44.jpg';
import imagen45 from '../imagenes/productos/45.jpg';
import imagen46 from '../imagenes/productos/46.jpg';
import imagen47 from '../imagenes/productos/47.jpg';
import imagen48 from '../imagenes/productos/48.jpg';
import imagen49 from '../imagenes/productos/49.jpg';
import imagen50 from '../imagenes/productos/50.jpg';
import imagen51 from '../imagenes/productos/51.jpg';
import imagen52 from '../imagenes/productos/52.jpg';
import imagen53 from '../imagenes/productos/53.jpg';
import imagen54 from '../imagenes/productos/54.jpg';
import imagen55 from '../imagenes/productos/55.jpg';
import imagen56 from '../imagenes/productos/56.jpg';
import imagen57 from '../imagenes/productos/57.jpg';
import imagen58 from '../imagenes/productos/58.jpg';
import imagen59 from '../imagenes/productos/59.jpg';
import imagen60 from '../imagenes/productos/60.jpg';
import imagen61 from '../imagenes/productos/61.jpg';
import imagen62 from '../imagenes/productos/62.jpg';
import imagen63 from '../imagenes/productos/63.jpg';
import imagen64 from '../imagenes/productos/64.jpg';
import imagen65 from '../imagenes/productos/65.jpg';
import imagen66 from '../imagenes/productos/66.jpg';
import imagen67 from '../imagenes/productos/67.jpg';
import imagen68 from '../imagenes/productos/68.jpg';
import imagen69 from '../imagenes/productos/69.jpg';
import imagen70 from '../imagenes/productos/70.jpg';
import imagen71 from '../imagenes/productos/71.jpg';
import imagen72 from '../imagenes/productos/72.jpg';
import imagen73 from '../imagenes/productos/73.jpg';
import imagen74 from '../imagenes/productos/74.jpg';
import imagen75 from '../imagenes/productos/75.jpg';
import imagen76 from '../imagenes/productos/76.jpg';
import imagen77 from '../imagenes/productos/77.jpg';
import imagen78 from '../imagenes/productos/78.jpg';
import imagen79 from '../imagenes/productos/79.jpg';
import imagen80 from '../imagenes/productos/80.jpg';
import imagen81 from '../imagenes/productos/81.jpg';
import imagen82 from '../imagenes/productos/82.jpg';
import imagen83 from '../imagenes/productos/83.jpg';
import imagen84 from '../imagenes/productos/84.jpg';
import imagen85 from '../imagenes/productos/85.jpg';
import imagen86 from '../imagenes/productos/86.jpg';
import imagen87 from '../imagenes/productos/87.jpg';
import imagen88 from '../imagenes/productos/88.jpg';
import imagen89 from '../imagenes/productos/89.jpg';
import imagen90 from '../imagenes/productos/90.jpg';
import imagen91 from '../imagenes/productos/91.jpg';
import imagen92 from '../imagenes/productos/92.jpg';
import imagen93 from '../imagenes/productos/93.jpg';
import imagen94 from '../imagenes/productos/94.jpg';
import imagen95 from '../imagenes/productos/95.jpg';
import imagen96 from '../imagenes/productos/96.jpg';
import imagen97 from '../imagenes/productos/97.jpg';
import imagen98 from '../imagenes/productos/98.jpg';
import imagen99 from '../imagenes/productos/99.jpg';
import imagen100 from '../imagenes/productos/100.jpg';

export const useProductos = () => {

    const [productos, setProductos] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setProductos([
                {
                    codigo: '001',
                    nombre: 'Smartphone Samsung Galaxy S21',
                    categoria: 'Electrónica',
                    empresaAsociada: 'Samsung',
                    descripcionCorta: 'Smartphone de alta gama',
                    descripcionLarga: 'Smartphone Samsung Galaxy S21 con pantalla AMOLED de 6.2 pulgadas, cámara de 64 MP, procesador Exynos 2100, 8 GB de RAM y 128 GB de almacenamiento.',
                    imagenProducto: 'samsung-galaxy-s21.jpg',
                    precio: 2999.99,
                    cantidadDisponible: 50,
                    puntuacion: 4.5,
                    imagen: imagen1
                  },
                  {
                    codigo: '002',
                    nombre: 'Laptop HP Pavilion',
                    categoria: 'Computadoras',
                    empresaAsociada: 'HP',
                    descripcionCorta: 'Laptop con gran rendimiento',
                    descripcionLarga: 'Laptop HP Pavilion con pantalla Full HD de 15.6 pulgadas, procesador Intel Core i5, 16 GB de RAM y 512 GB de SSD, ideal para trabajar y estudiar.',
                    imagenProducto: 'hp-pavilion-laptop.jpg',
                    precio: 2499.99,
                    cantidadDisponible: 30,
                    puntuacion: 4.2,
                    imagen: imagen2
                  },
                  {
                    codigo: '003',
                    nombre: 'Televisor Sony Bravia 4K',
                    categoria: 'Electrónica',
                    empresaAsociada: 'Sony',
                    descripcionCorta: 'Televisor 4K con colores vibrantes',
                    descripcionLarga: 'Televisor Sony Bravia 4K con pantalla LED de 55 pulgadas, resolución 4K, tecnología HDR, Smart TV y sonido envolvente Dolby Atmos.',
                    imagenProducto: 'sony-bravia-4k.jpg',
                    precio: 1699.99,
                    cantidadDisponible: 25,
                    puntuacion: 4.7,
                    imagen: imagen3
                  },
                  {
                    codigo: '004',
                    nombre: 'Refrigeradora LG Inverter',
                    categoria: 'Electrodomésticos',
                    empresaAsociada: 'LG',
                    descripcionCorta: 'Refrigeradora eficiente energéticamente',
                    descripcionLarga: 'Refrigeradora LG Inverter con capacidad de 25 pies cúbicos, tecnología Inverter, dispensador de agua y hielo, y control de temperatura inteligente.',
                    imagenProducto: 'lg-inverter-refrigerator.jpg',
                    precio: 1799.99,
                    cantidadDisponible: 15,
                    puntuacion: 4.4,
                    imagen: imagen4
                  },
                  {
                    codigo: '005',
                    nombre: 'Zapatillas Nike Air Max',
                    categoria: 'Ropa y Calzado',
                    empresaAsociada: 'Nike',
                    descripcionCorta: 'Zapatillas deportivas de estilo',
                    descripcionLarga: 'Zapatillas Nike Air Max con diseño moderno, suela con amortiguación Air Max, ideales para actividades deportivas y uso diario.',
                    imagenProducto: 'nike-air-max-shoes.jpg',
                    precio: 129.99,
                    cantidadDisponible: 100,
                    puntuacion: 4.8,
                    imagen: imagen5
                  },
                  {
                    codigo: '006',
                    nombre: 'Mesa de Comedor de Madera',
                    categoria: 'Muebles',
                    empresaAsociada: 'Muebles Perú',
                    descripcionCorta: 'Mesa de comedor elegante',
                    descripcionLarga: 'Mesa de comedor de madera maciza con capacidad para 6 personas, acabado de alta calidad y diseño elegante para tu hogar.',
                    imagenProducto: 'wooden-dining-table.jpg',
                    precio: 499.99,
                    cantidadDisponible: 10,
                    puntuacion: 4.6,
                    imagen: imagen6
                  },
                  {
                    codigo: '007',
                    nombre: 'Bicicleta de Montaña Trek',
                    categoria: 'Deportes y Aventura',
                    empresaAsociada: 'Trek Bikes',
                    descripcionCorta: 'Bicicleta todoterreno',
                    descripcionLarga: 'Bicicleta de montaña Trek con cuadro de aluminio, suspensión delantera, cambios Shimano y frenos de disco hidráulicos, perfecta para rutas fuera de carretera.',
                    imagenProducto: 'trek-mountain-bike.jpg',
                    precio: 899.99,
                    cantidadDisponible: 20,
                    puntuacion: 4.9,
                    imagen: imagen7
                  },
                  {
                    codigo: '008',
                    nombre: 'Set de Maletas Samsonite',
                    categoria: 'Equipaje y Viajes',
                    empresaAsociada: 'Samsonite',
                    descripcionCorta: 'Set de maletas de alta calidad',
                    descripcionLarga: 'Set de maletas Samsonite que incluye una maleta grande, una maleta mediana y una maleta de mano con ruedas giratorias, duraderas y resistentes.',
                    imagenProducto: 'samsonite-luggage-set.jpg',
                    precio: 329.99,
                    cantidadDisponible: 40,
                    puntuacion: 4.7,
                    imagen: imagen8
                  },
                  {
                    codigo: '009',
                    nombre: 'Cafetera Nespresso',
                    categoria: 'Electrodomésticos',
                    empresaAsociada: 'Nespresso',
                    descripcionCorta: 'Máquina de café espresso',
                    descripcionLarga: 'Cafetera Nespresso con sistema de cápsulas, preparación de café espresso y cappuccino, diseño compacto y elegante para tu cocina.',
                    imagenProducto: 'nespresso-coffee-machine.jpg',
                    precio: 199.99,
                    cantidadDisponible: 30,
                    puntuacion: 4.6,
                    imagen: imagen9
                  },
                  {
                    codigo: '010',
                    nombre: 'Libro "Cien Años de Soledad"',
                    categoria: 'Libros',
                    empresaAsociada: 'Editorial García Márquez',
                    descripcionCorta: 'Novela clásica de Gabriel García Márquez',
                    descripcionLarga: 'Libro "Cien Años de Soledad" del autor Gabriel García Márquez, considerada una de las obras literarias más importantes del siglo XX.',
                    imagenProducto: 'cien-anos-de-soledad-book.jpg',
                    precio: 24.99,
                    cantidadDisponible: 80,
                    puntuacion: 4.9,
                    imagen: imagen10
                  },
                  {
                    codigo: '011',
                    nombre: 'Reloj Casio G-Shock',
                    categoria: 'Relojes',
                    empresaAsociada: 'Casio',
                    descripcionCorta: 'Reloj resistente a golpes',
                    descripcionLarga: 'Reloj Casio G-Shock resistente a golpes, resistente al agua hasta 200 metros, con cronómetro, alarma y luz LED.',
                    imagenProducto: 'casio-g-shock-watch.jpg',
                    precio: 99.99,
                    cantidadDisponible: 60,
                    puntuacion: 4.5,
                    imagen: imagen11
                  },
                  {
                    codigo: '012',
                    nombre: 'Máquina de Ejercicios Bowflex',
                    categoria: 'Fitness y Deportes',
                    empresaAsociada: 'Bowflex',
                    descripcionCorta: 'Equipo de entrenamiento en casa',
                    descripcionLarga: 'Máquina de ejercicios Bowflex con múltiples configuraciones para ejercitar todo el cuerpo, resistencia ajustable y pantalla LCD para seguimiento de progreso.',
                    imagenProducto: 'bowflex-exercise-machine.jpg',
                    precio: 699.99,
                    cantidadDisponible: 15,
                    puntuacion: 4.7,
                    imagen: imagen12
                  },
                  {
                    codigo: '013',
                    nombre: 'Cámara Canon EOS Rebel T7i',
                    categoria: 'Fotografía',
                    empresaAsociada: 'Canon',
                    descripcionCorta: 'Cámara DSLR de alta calidad',
                    descripcionLarga: 'Cámara Canon EOS Rebel T7i con sensor CMOS de 24.2 megapíxeles, pantalla táctil LCD, grabación de video Full HD y conectividad Wi-Fi.',
                    imagenProducto: 'canon-eos-rebel-t7i-camera.jpg',
                    precio: 799.99,
                    cantidadDisponible: 20,
                    puntuacion: 4.8,
                    imagen: imagen13
                  },
                  {
                    codigo: '014',
                    nombre: 'Colchón King Size Memory Foam',
                    categoria: 'Hogar y Decoración',
                    empresaAsociada: 'Sleep Comfort',
                    descripcionCorta: 'Colchón de espuma viscoelástica',
                    descripcionLarga: 'Colchón King Size Memory Foam de alta densidad, con capa de gel refrigerante, diseño ergonómico y funda lavable, para un sueño cómodo y fresco.',
                    imagenProducto: 'memory-foam-mattress.jpg',
                    precio: 599.99,
                    cantidadDisponible: 10,
                    puntuacion: 4.6,
                    imagen: imagen14
                  },
                  {
                    codigo: '015',
                    nombre: 'Kit de Maquillaje Profesional',
                    categoria: 'Belleza y Cuidado Personal',
                    empresaAsociada: 'Makeup Pro',
                    descripcionCorta: 'Kit completo de maquillaje',
                    descripcionLarga: 'Kit de maquillaje profesional que incluye sombras de ojos, labiales, bases, pinceles y estuche, perfecto para crear looks impresionantes.',
                    imagenProducto: 'professional-makeup-kit.jpg',
                    precio: 69.99,
                    cantidadDisponible: 50,
                    puntuacion: 4.4,
                    imagen: imagen15
                  },
                  {
                    codigo: '016',
                    nombre: 'Silla de Oficina Ergonómica',
                    categoria: 'Muebles',
                    empresaAsociada: 'ErgoComfort',
                    descripcionCorta: 'Silla ajustable para oficina',
                    descripcionLarga: 'Silla de oficina ergonómica con respaldo alto, soporte lumbar ajustable, reposabrazos ajustables y asiento acolchado, para una comodidad óptima durante el trabajo.',
                    imagenProducto: 'ergonomic-office-chair.jpg',
                    precio: 199.99,
                    cantidadDisponible: 30,
                    puntuacion: 4.5,
                    imagen: imagen16
                  },
                  {
                    codigo: '017',
                    nombre: 'Juego de Mesa Catan',
                    categoria: 'Juegos de Mesa',
                    empresaAsociada: 'Asmodee',
                    descripcionCorta: 'Juego de estrategia',
                    descripcionLarga: 'Juego de mesa Catan, un juego de estrategia y negociación donde los jugadores compiten por recursos y construyen colonias en una isla ficticia.',
                    imagenProducto: 'catan-board-game.jpg',
                    precio: 34.99,
                    cantidadDisponible: 40,
                    puntuacion:3.5,
                    imagen: imagen17
                    },
                  {
                  codigo: '018',
                  nombre: 'Laptop Lenovo IdeaPad 3',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Lenovo',
                  descripcionCorta: 'Laptop de 15.6 pulgadas con Windows 10',
                  descripcionLarga: 'Laptop Lenovo IdeaPad 3 con pantalla HD de 15.6 pulgadas, procesador Intel Core i3, 4 GB de RAM, 256 GB de SSD y Windows 10 Home.',
                  imagenProducto: 'lenovo-ideapad-3.jpg',
                  precio: 1999.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.2,
                  imagen: imagen18
                },
                {
                  codigo: '019',
                  nombre: 'Consola PlayStation 5',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Sony',
                  descripcionCorta: 'Consola de videojuegos de última generación',
                  descripcionLarga: 'Consola PlayStation 5 con lector de discos Blu-ray, control inalámbrico DualSense, capacidad de 825 GB y compatibilidad con juegos en 4K y 8K.',
                  imagenProducto: 'playstation-5.jpg',
                  precio: 3999.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.8,
                  imagen: imagen19
                },
                {
                  codigo: '020',
                  nombre: 'Smart TV LG 43UN7300',
                  categoria: 'Electrónica',
                  empresaAsociada: 'LG',
                  descripcionCorta: 'Televisor inteligente de 43 pulgadas con 4K',
                  descripcionLarga: 'Smart TV LG 43UN7300 con pantalla LED de 43 pulgadas, resolución 4K Ultra HD, sistema operativo webOS, asistente de voz Alexa y Google Assistant, y conectividad Wi-Fi y Bluetooth.',
                  imagenProducto: 'lg-43un7300.jpg',
                  precio: 1499.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.4,
                  imagen: imagen20
                },
                {
                  codigo: '021',
                  nombre: 'Audífonos inalámbricos Apple AirPods Pro',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Apple',
                  descripcionCorta: 'Audífonos con cancelación de ruido y estuche de carga',
                  descripcionLarga: 'Audífonos inalámbricos Apple AirPods Pro con diseño ergonómico, cancelación activa de ruido, modo de sonido ambiente, resistencia al agua y al sudor, y estuche de carga inalámbrica.',
                  imagenProducto: 'apple-airpods-pro.jpg',
                  precio: 999.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.6,
                  imagen: imagen21
                },
                {
                  codigo: '022',
                  nombre: 'Cámara digital Canon EOS Rebel T7',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Canon',
                  descripcionCorta: 'Cámara réflex de 24.1 MP con lente y accesorios',
                  descripcionLarga: 'Cámara digital Canon EOS Rebel T7 con sensor CMOS de 24.1 MP, procesador DIGIC 4+, pantalla LCD de 3 pulgadas, grabación de video Full HD, lente EF-S 18-55mm, trípode, estuche y tarjeta de memoria de 32 GB.',
                  imagenProducto: 'canon-eos-rebel-t7.jpg',
                  precio: 2499.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.3,
                  imagen: imagen22
                },
                {
                  codigo: '023',
                  nombre: 'Reloj inteligente Samsung Galaxy Watch Active 2',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Samsung',
                  descripcionCorta: 'Reloj con monitor de ritmo cardíaco y GPS',
                  descripcionLarga: 'Reloj inteligente Samsung Galaxy Watch Active 2 con pantalla AMOLED de 1.4 pulgadas, monitor de ritmo cardíaco, GPS, resistencia al agua, batería de larga duración y compatibilidad con Android e iOS.',
                  imagenProducto: 'samsung-galaxy-watch-active-2.jpg',
                  precio: 899.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.7,
                  imagen: imagen23
                },
                {
                  codigo: '024',
                  nombre: 'Impresora multifuncional HP DeskJet 3775',
                  categoria: 'Electrónica',
                  empresaAsociada: 'HP',
                  descripcionCorta: 'Impresora, escáner y copiadora inalámbrica',
                  descripcionLarga: 'Impresora multifuncional HP DeskJet 3775 con funciones de impresión, escaneo y copiado, conectividad inalámbrica, impresión a color y en blanco y negro, bandeja de entrada de 60 hojas y cartuchos originales HP.',
                  imagenProducto: 'hp-deskjet-3775.jpg',
                  precio: 499.99,
                  cantidadDisponible: 40,
                  puntuacion: 4.1,
                  imagen: imagen24
                },
                {
                  codigo: '025',
                  nombre: 'Parlante portátil JBL Flip 5',
                  categoria: 'Electrónica',
                  empresaAsociada: 'JBL',
                  descripcionCorta: 'Parlante con Bluetooth y resistencia al agua',
                  descripcionLarga: 'Parlante portátil JBL Flip 5 con conexión Bluetooth, sonido estéreo, batería recargable de 12 horas, resistencia al agua y al polvo, y diseño compacto y colorido.',
                  imagenProducto: 'jbl-flip-5.jpg',
                  precio: 599.99,
                  cantidadDisponible: 35,
                  puntuacion: 4.9,
                  imagen: imagen25
                },
                {
                  codigo: '026',
                  nombre: 'Tablet Amazon Fire HD 10',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Amazon',
                  descripcionCorta: 'Tablet de 10.1 pulgadas con Alexa integrada',
                  descripcionLarga: 'Tablet Amazon Fire HD 10 con pantalla de 10.1 pulgadas, resolución Full HD, procesador de ocho núcleos, 2 GB de RAM, 32 GB de almacenamiento, cámara trasera de 5 MP, cámara frontal de 2 MP, batería de 12 horas y asistente de voz Alexa integrada.',
                  imagenProducto: 'amazon-fire-hd-10.jpg',
                  precio: 999.99,
                  cantidadDisponible: 45,
                  puntuacion: 4.0,
                  imagen: imagen26
                },
                {
                  codigo: '027',
                  nombre: 'Micrófono profesional Blue Yeti',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Blue',
                  descripcionCorta: 'Micrófono con múltiples patrones de captación y control de ganancia',
                  descripcionLarga: 'Micrófono profesional Blue Yeti con diseño elegante, múltiples patrones de captación (cardioide, bidireccional, omnidireccional y estéreo), control de ganancia, botón de silencio y salida de auriculares.',
                  imagenProducto: 'blue-yeti.jpg',
                  precio: 799.99,
                  cantidadDisponible: 18,
                  puntuacion: 4.7,
                  imagen: imagen27
                },
                {
                  codigo: '028',
                  nombre: 'Proyector Epson PowerLite X39',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Epson',
                  descripcionCorta: 'Proyector con resolución XGA y 3500 lúmenes',
                  descripcionLarga: 'Proyector Epson PowerLite X39 con resolución XGA (1024 x 768), brillo de 3500 lúmenes, contraste de 15000:1, altavoz integrado de 5 W, conectividad HDMI, VGA y USB, y control remoto.',
                  imagenProducto: 'epson-powerlite-x39.jpg',
                  precio: 1599.99,
                  cantidadDisponible: 22,
                  puntuacion: 4.5,
                  imagen: imagen28
                },
                {
                  codigo: '029',
                  nombre: 'Teclado mecánico Razer BlackWidow V3',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Razer',
                  descripcionCorta: 'Teclado con iluminación RGB y switches verdes',
                  descripcionLarga: 'Teclado mecánico Razer BlackWidow V3 con iluminación RGB personalizable, switches verdes táctiles y sonoros, teclas multimedia, reposamuñecas ergonómico y cable trenzado.',
                  imagenProducto: 'razer-blackwidow-v3.jpg',
                  precio: 699.99,
                  cantidadDisponible: 28,
                  puntuacion: 4.8,
                  imagen: imagen29
                },
                {
                  codigo: '030',
                  nombre: 'Mouse inalámbrico Logitech MX Master 3',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Logitech',
                  descripcionCorta: 'Mouse con scroll electromagnético y carga rápida',
                  descripcionLarga: 'Mouse inalámbrico Logitech MX Master 3 con scroll electromagnético, sensor Darkfield de 4000 DPI, botones personalizables, batería recargable de hasta 70 días y carga rápida de 3 minutos para un día completo de uso.',
                  imagenProducto: 'logitech-mx-master-3.jpg',
                  precio: 499.99,
                  cantidadDisponible: 32,
                  puntuacion: 4.9,
                  imagen: imagen30
                },
                {
                  codigo: '031',
                  nombre: 'Monitor curvo Samsung LC27F390FHLXPE',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Samsung',
                  descripcionCorta: 'Monitor de 27 pulgadas con curvatura 1800R',
                  descripcionLarga: 'Monitor curvo Samsung LC27F390FHLXPE con pantalla LED de 27 pulgadas, resolución Full HD, curvatura 1800R, tiempo de respuesta de 4 ms, frecuencia de actualización de 60 Hz, modo juego, puerto HDMI y VGA.',
                  imagenProducto: 'samsung-lc27f390fhlxpe.jpg',
                  precio: 1199.99,
                  cantidadDisponible: 16,
                  puntuacion: 4.6,
                  imagen: imagen31
                },
                {
                  codigo: '032',
                  nombre: 'Router inalámbrico TP-Link Archer C6',
                  categoria: 'Electrónica',
                  empresaAsociada: 'TP-Link',
                  descripcionCorta: 'Router con Wi-Fi de doble banda y 4 antenas',
                  descripcionLarga: 'Router inalámbrico TP-Link Archer C6 con Wi-Fi de doble banda (2.4 GHz y 5 GHz), velocidad de hasta 1200 Mbps, 4 antenas externas y una interna, puerto Gigabit WAN y 4 puertos Gigabit LAN, y control parental.',
                  imagenProducto: 'tp-link-archer-c6.jpg',
                  precio: 299.99,
                  cantidadDisponible: 24,
                  puntuacion: 4.4,
                  imagen: imagen32
                },
                {
                  codigo: '033',
                  nombre: 'Auriculares con micrófono HyperX Cloud Stinger',
                  categoria: 'Electrónica',
                  empresaAsociada: 'HyperX',
                  descripcionCorta: 'Auriculares con sonido envolvente y micrófono con cancelación de ruido',
                  descripcionLarga: 'Auriculares con micrófono HyperX Cloud Stinger con sonido envolvente 7.1, micrófono con cancelación de ruido y control de volumen, almohadillas de espuma viscoelástica, diadema ajustable y ligera, y cable de 1.3 metros.',
                  imagenProducto: 'hyperx-cloud-stinger.jpg',
                  precio: 399.99,
                  cantidadDisponible: 26,
                  puntuacion: 4.3,
                  imagen: imagen33
                },
                {
                  codigo: '034',
                  nombre: 'Reproductor de Blu-ray Sony BDP-S3700',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Sony',
                  descripcionCorta: 'Reproductor de Blu-ray con Wi-Fi y streaming',
                  descripcionLarga: 'Reproductor de Blu-ray Sony BDP-S3700 con Wi-Fi integrado, reproducción de discos Blu-ray, DVD y CD, streaming de servicios como Netflix, YouTube y Spotify, puerto USB, salida HDMI y control remoto.',
                  imagenProducto: 'sony-bdp-s3700.jpg',
                  precio: 499.99,
                  cantidadDisponible: 14,
                  puntuacion: 4.2,
                  imagen: imagen34
                },
                {
                  codigo: '035',
                  nombre: 'Altavoz inteligente Amazon Echo Dot 4ta generación',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Amazon',
                  descripcionCorta: 'Altavoz con Alexa integrada y diseño esférico',
                  descripcionLarga: 'Altavoz inteligente Amazon Echo Dot 4ta generación con Alexa integrada, diseño esférico, sonido de alta calidad, control de dispositivos inteligentes, llamadas y mensajes, y anillo de luz LED.',
                  imagenProducto: 'amazon-echo-dot-4.jpg',
                  precio: 299.99,
                  cantidadDisponible: 40,
                  puntuacion: 4.8,
                  imagen: imagen35
                },
                {
                  codigo: '036',
                  nombre: 'Disco duro externo Seagate Expansion 2 TB',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Seagate',
                  descripcionCorta: 'Disco duro portátil con USB 3.0',
                  descripcionLarga: 'Disco duro externo Seagate Expansion 2 TB con capacidad de almacenamiento de 2 terabytes, conexión USB 3.0, velocidad de transferencia de hasta 5 Gbps, compatible con Windows y Mac, y diseño compacto y ligero.',
                  imagenProducto: 'seagate-expansion-2tb.jpg',
                  precio: 399.99,
                  cantidadDisponible: 38,
                  puntuacion: 4.6,
                  imagen: imagen36
                },
                {
                  codigo: '037',
                  nombre: 'Cámara Canon EOS 90D',
                  categoria: 'Fotografía',
                  empresaAsociada: 'Canon',
                  descripcionCorta: 'Cámara DSLR para fotógrafos avanzados',
                  descripcionLarga: 'Cámara Canon EOS 90D con sensor APS-C de 32.5 megapíxeles, grabación de video 4K, pantalla táctil de ángulo variable, y rendimiento de alta velocidad.',
                  imagenProducto: 'canon-eos-90d.jpg',
                  precio: 1399.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.9,
                  imagen: imagen37
                },
                {
                  codigo: '038',
                  nombre: 'Portátil Lenovo ThinkPad X1 Carbon',
                  categoria: 'Computadoras',
                  empresaAsociada: 'Lenovo',
                  descripcionCorta: 'Laptop ultraligera para profesionales',
                  descripcionLarga: 'Laptop Lenovo ThinkPad X1 Carbon con pantalla 4K de 14 pulgadas, procesador Intel Core i7, 16 GB de RAM, 1 TB de SSD, y diseño ultraportátil.',
                  imagenProducto: 'lenovo-thinkpad-x1-carbon.jpg',
                  precio: 2699.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.7,
                  imagen: imagen38
                },
                {
                  codigo: '039',
                  nombre: 'Altavoces Bose SoundLink Revolve+',
                  categoria: 'Audio',
                  empresaAsociada: 'Bose',
                  descripcionCorta: 'Altavoz portátil con sonido envolvente',
                  descripcionLarga: 'Altavoces Bluetooth Bose SoundLink Revolve+ con sonido de 360 grados, resistencia al agua, hasta 16 horas de reproducción y micrófono incorporado.',
                  imagenProducto: 'bose-soundlink-revolve.jpg',
                  precio: 299.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.6,
                  imagen: imagen39
                },
                {
                  codigo: '040',
                  nombre: 'Silla de Oficina Ergonómica',
                  categoria: 'Muebles',
                  empresaAsociada: 'ErgoComfort',
                  descripcionCorta: 'Silla ergonómica para comodidad en el trabajo',
                  descripcionLarga: 'Silla de oficina ErgoComfort con diseño ergonómico, soporte lumbar ajustable, reposabrazos acolchados y materiales de alta calidad para largas horas de trabajo.',
                  imagenProducto: 'silla-ergonomica.jpg',
                  precio: 199.99,
                  cantidadDisponible: 40,
                  puntuacion: 4.5,
                  imagen: imagen40
                },
                {
                  codigo: '041',
                  nombre: 'Tablet Samsung Galaxy Tab A7',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Samsung',
                  descripcionCorta: 'Tablet con pantalla Full HD',
                  descripcionLarga: 'Tablet Samsung Galaxy Tab A7 con pantalla Full HD de 10.4 pulgadas, batería de larga duración, 64 GB de almacenamiento, y alto rendimiento para entretenimiento y productividad.',
                  imagenProducto: 'samsung-galaxy-tab-a7.jpg',
                  precio: 299.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.6,
                  imagen: imagen41
                },
                {
                  codigo: '042',
                  nombre: 'Auriculares Sony WH-1000XM4',
                  categoria: 'Audio',
                  empresaAsociada: 'Sony',
                  descripcionCorta: 'Auriculares con cancelación de ruido',
                  descripcionLarga: 'Auriculares Sony WH-1000XM4 con cancelación de ruido líder en la industria, calidad de sonido excepcional, hasta 30 horas de autonomía y comodidad superior.',
                  imagenProducto: 'sony-wh-1000xm4.jpg',
                  precio: 349.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.8,
                  imagen: imagen42
                },
                {
                  codigo: '043',
                  nombre: 'Impresora HP LaserJet Pro',
                  categoria: 'Impresoras',
                  empresaAsociada: 'HP',
                  descripcionCorta: 'Impresora láser de alta velocidad',
                  descripcionLarga: 'Impresora HP LaserJet Pro con impresión rápida de hasta 30 ppm, conectividad Wi-Fi, impresión móvil, y calidad de impresión profesional.',
                  imagenProducto: 'hp-laserjet-pro.jpg',
                  precio: 199.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.5,
                  imagen: imagen43
                },
                {
                  codigo: '044',
                  nombre: 'Bicicleta de Montaña Trek',
                  categoria: 'Deportes',
                  empresaAsociada: 'Trek',
                  descripcionCorta: 'Bicicleta todo terreno de alta gama',
                  descripcionLarga: 'Bicicleta de montaña Trek con cuadro de aluminio, suspensión delantera, frenos de disco hidráulicos, y componentes de calidad para aventuras en senderos y montañas.',
                  imagenProducto: 'bicicleta-trek.jpg',
                  precio: 1499.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.7,
                  imagen: imagen44
                },
                {
                  codigo: '045',
                  nombre: 'Horno Microondas Panasonic',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'Panasonic',
                  descripcionCorta: 'Horno microondas de alta potencia',
                  descripcionLarga: 'Horno microondas Panasonic con capacidad de 1.2 cuartos, 1200 vatios de potencia, funciones de cocción rápida y pantalla LED, ideal para cocinar y calentar alimentos.',
                  imagenProducto: 'panasonic-microwave.jpg',
                  precio: 129.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.6,
                  imagen: imagen45
                },
                {
                  codigo: '046',
                  nombre: 'Cámara de Seguridad Arlo Pro 3',
                  categoria: 'Seguridad',
                  empresaAsociada: 'Arlo',
                  descripcionCorta: 'Sistema de cámaras de seguridad inalámbricas',
                  descripcionLarga: 'Sistema de cámaras de seguridad Arlo Pro 3 con resolución 2K, visión nocturna a color, detección de movimiento avanzada, y audio bidireccional.',
                  imagenProducto: 'arlo-pro-3-camera.jpg',
                  precio: 299.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.8,
                  imagen: imagen46
                },
                {
                  codigo: '047',
                  nombre: 'Silla de Escritorio Ergonómica',
                  categoria: 'Muebles',
                  empresaAsociada: 'ErgoComfort',
                  descripcionCorta: 'Silla de oficina ergonómica con respaldo alto',
                  descripcionLarga: 'Silla de escritorio ErgoComfort con respaldo alto, soporte lumbar ajustable, reposabrazos ergonómicos, y diseño elegante para una cómoda jornada de trabajo.',
                  imagenProducto: 'silla-escritorio-ergonomica.jpg',
                  precio: 169.99,
                  cantidadDisponible: 40,
                  puntuacion: 4.7,
                  imagen: imagen47
                },
                {
                  codigo: '048',
                  nombre: 'Robot Aspiradora iRobot Roomba',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'iRobot',
                  descripcionCorta: 'Robot aspirador inteligente',
                  descripcionLarga: 'Robot aspiradora iRobot Roomba con navegación inteligente, mapeo de habitaciones, tecnología de limpieza de alto rendimiento y control desde el teléfono móvil.',
                  imagenProducto: 'irobot-roomba-vacuum.jpg',
                  precio: 399.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.9,
                  imagen: imagen48
                },
                {
                  codigo: '049',
                  nombre: 'Monitor LG Ultrawide 34"',
                  categoria: 'Monitores',
                  empresaAsociada: 'LG',
                  descripcionCorta: 'Monitor panorámico para productividad',
                  descripcionLarga: 'Monitor LG Ultrawide de 34 pulgadas con resolución 4K, pantalla panorámica IPS, tecnología FreeSync, y múltiples puertos para una experiencia de trabajo inmersiva.',
                  imagenProducto: 'lg-ultrawide-monitor.jpg',
                  precio: 499.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.6,
                  imagen: imagen49
                },
                {
                  codigo: '050',
                  nombre: 'Mochila North Face Recon',
                  categoria: 'Mochilas',
                  empresaAsociada: 'The North Face',
                  descripcionCorta: 'Mochila resistente y versátil',
                  descripcionLarga: 'Mochila North Face Recon con capacidad de 30 litros, compartimento para laptop, múltiples bolsillos, y construcción duradera para aventuras al aire libre y uso diario.',
                  imagenProducto: 'north-face-recon-backpack.jpg',
                  precio: 99.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.7,
                  imagen: imagen50
                },
                {
                  codigo: '0511',
                  nombre: 'Smartphone Samsung Galaxy S22',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Samsung',
                  descripcionCorta: 'Smartphone de última generación',
                  descripcionLarga: 'El nuevo Samsung Galaxy S22 es un smartphone de última generación con pantalla AMOLED de alta resolución, cámara versátil, rendimiento excepcional y conectividad 5G.',
                  imagenProducto: 'samsung-galaxy-s22.jpg',
                  precio: 899.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.9,
                  imagen: imagen51
                },
                {
                  codigo: '0512',
                  nombre: 'Portátil Dell XPS 15',
                  categoria: 'Computadoras',
                  empresaAsociada: 'Dell',
                  descripcionCorta: 'Portátil de alto rendimiento',
                  descripcionLarga: 'El portátil Dell XPS 15 ofrece un rendimiento excepcional con su procesador Intel Core i7, pantalla táctil 4K, gráficos potentes y diseño delgado y elegante.',
                  imagenProducto: 'dell-xps-15-laptop.jpg',
                  precio: 1599.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.8,
                  imagen: imagen52
                },
                {
                  codigo: '0513',
                  nombre: 'Televisor LG OLED 4K',
                  categoria: 'Televisores',
                  empresaAsociada: 'LG',
                  descripcionCorta: 'Televisor OLED de alta definición',
                  descripcionLarga: 'El televisor LG OLED 4K ofrece colores vibrantes, negros profundos y una calidad de imagen impresionante. Con tecnología Smart TV, HDR y pantalla de 55 pulgadas.',
                  imagenProducto: 'lg-oled-4k-tv.jpg',
                  precio: 1199.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.7,
                  imagen: imagen53
                },
                {
                  codigo: '0514',
                  nombre: 'Cafetera Nespresso Vertuo',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'Nespresso',
                  descripcionCorta: 'Cafetera de cápsulas',
                  descripcionLarga: 'La cafetera Nespresso Vertuo prepara café y espresso de alta calidad con facilidad. Compatible con cápsulas Nespresso Vertuo y cuenta con opciones personalizables.',
                  imagenProducto: 'nespresso-vertuo-coffee-maker.jpg',
                  precio: 199.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.6,
                  imagen: imagen54
                },
                {
                  codigo: '0515',
                  nombre: 'Altavoces Bose SoundLink',
                  categoria: 'Audio',
                  empresaAsociada: 'Bose',
                  descripcionCorta: 'Altavoces portátiles Bluetooth',
                  descripcionLarga: 'Los altavoces Bose SoundLink ofrecen un sonido de alta calidad en un diseño compacto y portátil. Con conectividad Bluetooth y hasta 12 horas de reproducción continua.',
                  imagenProducto: 'bose-soundlink-speakers.jpg',
                  precio: 149.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.8,
                  imagen: imagen55
                },
                {
                  codigo: '0516',
                  nombre: 'Refrigeradora Samsung Side-by-Side',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'Samsung',
                  descripcionCorta: 'Refrigeradora con dispensador de agua',
                  descripcionLarga: 'La refrigeradora Samsung Side-by-Side ofrece un amplio espacio de almacenamiento, tecnología de enfriamiento avanzada y un dispensador de agua y hielo.',
                  imagenProducto: 'samsung-side-by-side-fridge.jpg',
                  precio: 1699.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.7,
                  imagen: imagen56
                },
                {
                  codigo: '0517',
                  nombre: 'Zapatillas Nike Air Max',
                  categoria: 'Calzado',
                  empresaAsociada: 'Nike',
                  descripcionCorta: 'Zapatillas deportivas de moda',
                  descripcionLarga: 'Las zapatillas Nike Air Max ofrecen comodidad y estilo con su amortiguación Air Max, diseño moderno y materiales de alta calidad. Disponibles en varios colores.',
                  imagenProducto: 'nike-air-max-sneakers.jpg',
                  precio: 119.99,
                  cantidadDisponible: 40,
                  puntuacion: 4.9,
                  imagen: imagen57
                },
                {
                  codigo: '0518',
                  nombre: 'Batería Externa Anker PowerCore',
                  categoria: 'Accesorios',
                  empresaAsociada: 'Anker',
                  descripcionCorta: 'Batería portátil de alta capacidad',
                  descripcionLarga: 'La batería externa Anker PowerCore te permite cargar tus dispositivos móviles en movimiento. Con capacidad de 20,000 mAh y múltiples puertos de carga.',
                  imagenProducto: 'anker-powercore-battery.jpg',
                  precio: 49.99,
                  cantidadDisponible: 50,
                  puntuacion: 4.7,
                  imagen: imagen58
                },
                {
                  codigo: '0519',
                  nombre: 'Teclado Mecánico Corsair K95 RGB',
                  categoria: 'Periféricos',
                  empresaAsociada: 'Corsair',
                  descripcionCorta: 'Teclado mecánico para gamers',
                  descripcionLarga: 'El teclado mecánico Corsair K95 RGB ofrece una experiencia de juego excepcional con interruptores Cherry MX, retroiluminación RGB personalizable y teclas programables.',
                  imagenProducto: 'corsair-k95-rgb-keyboard.jpg',
                  precio: 179.99,
                  cantidadDisponible: 18,
                  puntuacion: 4.8,
                  imagen: imagen59
                },
                {
                  codigo: '0520',
                  nombre: 'Cámara DSLR Canon EOS 90D',
                  categoria: 'Cámaras',
                  empresaAsociada: 'Canon',
                  descripcionCorta: 'Cámara réflex digital de alta calidad',
                  descripcionLarga: 'La cámara DSLR Canon EOS 90D ofrece imágenes de alta resolución y grabación de video 4K. Ideal para fotógrafos y videógrafos avanzados.',
                  imagenProducto: 'canon-eos-90d-camera.jpg',
                  precio: 1299.99,
                  cantidadDisponible: 8,
                  puntuacion: 4.9,
                  imagen: imagen60
                },
                {
                  codigo: '05121',
                  nombre: 'Tablet Apple iPad Pro',
                  categoria: 'Electrónica',
                  empresaAsociada: 'Apple',
                  descripcionCorta: 'Tablet de alto rendimiento',
                  descripcionLarga: 'El iPad Pro de Apple es una tablet de alto rendimiento con pantalla Retina, procesador A14 Bionic, Apple Pencil compatible y almacenamiento de hasta 1TB.',
                  imagenProducto: 'apple-ipad-pro.jpg',
                  precio: 799.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.8,
                  imagen: imagen61
                },
                {
                  codigo: '05122',
                  nombre: 'Silla de Oficina Ergonómica',
                  categoria: 'Muebles',
                  empresaAsociada: 'ErgoComfort',
                  descripcionCorta: 'Silla ajustable para la espalda',
                  descripcionLarga: 'La silla de oficina ErgoComfort ofrece comodidad y soporte para largas horas de trabajo. Con ajustes ergonómicos, respaldo de malla y ruedas giratorias.',
                  imagenProducto: 'ergonomic-office-chair.jpg',
                  precio: 249.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.7,
                  imagen: imagen62
                },
                {
                  codigo: '05123',
                  nombre: 'Reloj Garmin Forerunner 945',
                  categoria: 'Deportes',
                  empresaAsociada: 'Garmin',
                  descripcionCorta: 'Reloj inteligente para correr',
                  descripcionLarga: 'El reloj Garmin Forerunner 945 es ideal para corredores y deportistas. Ofrece seguimiento GPS, métricas avanzadas, música, notificaciones y resistencia al agua.',
                  imagenProducto: 'garmin-forerunner-945.jpg',
                  precio: 449.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.9,
                  imagen: imagen63
                },
                {
                  codigo: '05124',
                  nombre: 'Impresora HP OfficeJet Pro',
                  categoria: 'Impresoras',
                  empresaAsociada: 'HP',
                  descripcionCorta: 'Impresora multifunción de alta calidad',
                  descripcionLarga: 'La impresora HP OfficeJet Pro es perfecta para entornos de oficina. Ofrece impresión a color de alta calidad, escaneo, copiado y fax, además de conectividad Wi-Fi.',
                  imagenProducto: 'hp-officejet-pro-printer.jpg',
                  precio: 299.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.6,
                  imagen: imagen64
                },
                {
                  codigo: '05125',
                  nombre: 'Bicicleta de Montaña Trek X-Caliber',
                  categoria: 'Deportes',
                  empresaAsociada: 'Trek',
                  descripcionCorta: 'Bicicleta todo terreno',
                  descripcionLarga: 'La bicicleta de montaña Trek X-Caliber es ideal para aventuras en senderos. Con cuadro de aluminio, suspensión delantera y componentes de alta calidad.',
                  imagenProducto: 'trek-x-caliber-mountain-bike.jpg',
                  precio: 799.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.7,
                  imagen: imagen65
                },
                {
                  codigo: '05126',
                  nombre: 'Smart TV Sony Bravia 4K',
                  categoria: 'Televisores',
                  empresaAsociada: 'Sony',
                  descripcionCorta: 'Televisor 4K con Android TV',
                  descripcionLarga: 'El Smart TV Sony Bravia 4K ofrece una experiencia de visualización excepcional con resolución 4K, Android TV, procesador rápido y aplicaciones integradas.',
                  imagenProducto: 'sony-bravia-4k-tv.jpg',
                  precio: 999.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.8,
                  imagen: imagen66
                },
                {
                  codigo: '05127',
                  nombre: 'Cafetera Nespresso Expert',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'Nespresso',
                  descripcionCorta: 'Cafetera de alta gama',
                  descripcionLarga: 'La cafetera Nespresso Expert prepara café espresso de alta calidad con múltiples opciones de personalización. Incluye función de leche y control por aplicación.',
                  imagenProducto: 'nespresso-expert-coffee-maker.jpg',
                  precio: 249.99,
                  cantidadDisponible: 18,
                  puntuacion: 4.7,
                  imagen: imagen67
                },
                {
                  codigo: '05128',
                  nombre: 'Altavoz JBL Charge 5',
                  categoria: 'Audio',
                  empresaAsociada: 'JBL',
                  descripcionCorta: 'Altavoz portátil resistente al agua',
                  descripcionLarga: 'El altavoz JBL Charge 5 ofrece sonido potente y resistencia al agua. Con batería de larga duración, conectividad Bluetooth y puerto de carga USB.',
                  imagenProducto: 'jbl-charge-5-speaker.jpg',
                  precio: 149.99,
                  cantidadDisponible: 22,
                  puntuacion: 4.8,
                  imagen: imagen68
                },
                {
                  codigo: '05129',
                  nombre: 'Laptop ASUS ZenBook Pro',
                  categoria: 'Computadoras',
                  empresaAsociada: 'ASUS',
                  descripcionCorta: 'Laptop de alto rendimiento',
                  descripcionLarga: 'La laptop ASUS ZenBook Pro ofrece rendimiento de primera clase con procesador Intel Core i9, pantalla táctil 4K, tarjeta gráfica dedicada y diseño premium.',
                  imagenProducto: 'asus-zenbook-pro-laptop.jpg',
                  precio: 1799.99,
                  cantidadDisponible: 14,
                  puntuacion: 4.9,
                  imagen: imagen69
                },
                {
                  codigo: '05130',
                  nombre: 'Cámara GoPro Hero 10',
                  categoria: 'Cámaras',
                  empresaAsociada: 'GoPro',
                  descripcionCorta: 'Cámara de acción 4K',
                  descripcionLarga: 'La cámara GoPro Hero 10 es perfecta para grabar aventuras. Captura video 4K a 60fps, tiene estabilización avanzada y es resistente al agua.',
                  imagenProducto: 'gopro-hero-10-camera.jpg',
                  precio: 399.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.7,
                  imagen: imagen70
                },
                {
                  codigo: '05131',
                  nombre: 'Mesa de Comedor Moderna',
                  categoria: 'Muebles',
                  empresaAsociada: 'HomeStyle',
                  descripcionCorta: 'Mesa de comedor elegante',
                  descripcionLarga: 'La mesa de comedor moderna de HomeStyle es perfecta para cenas familiares y eventos. Diseño elegante con superficie de vidrio templado y patas de acero inoxidable.',
                  imagenProducto: 'modern-dining-table.jpg',
                  precio: 599.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.8,
                  imagen: imagen71
                },
                {
                  codigo: '05132',
                  nombre: 'Lavadora de Carga Frontal',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'EcoWash',
                  descripcionCorta: 'Lavadora de alta eficiencia',
                  descripcionLarga: 'La lavadora de carga frontal de EcoWash es eficiente en energía y agua. Con capacidad para grandes cargas, múltiples ciclos de lavado y tecnología de ahorro de agua.',
                  imagenProducto: 'front-load-washer.jpg',
                  precio: 449.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.7,
                  imagen: imagen72
                },
                {
                  codigo: '05133',
                  nombre: 'Robot Aspiradora iRobot Roomba',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'iRobot',
                  descripcionCorta: 'Aspiradora inteligente',
                  descripcionLarga: 'El robot aspiradora iRobot Roomba hace la limpieza de tu hogar más fácil. Funciona con navegación inteligente, tecnología de detección de suciedad y programación.',
                  imagenProducto: 'irobot-roomba-vacuum.jpg',
                  precio: 349.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.9,
                  imagen: imagen73
                },
                {
                  codigo: '05134',
                  nombre: 'Set de Ollas y Sartenes Antiadherentes',
                  categoria: 'Cocina',
                  empresaAsociada: 'Culinario',
                  descripcionCorta: 'Juego de cocina de calidad',
                  descripcionLarga: 'El set de ollas y sartenes antiadherentes de Culinario incluye utensilios de cocina de alta calidad. Ideales para cocinar de manera saludable y sin que los alimentos se peguen.',
                  imagenProducto: 'nonstick-cookware-set.jpg',
                  precio: 149.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.8,
                  imagen: imagen74
                },
                {
                  codigo: '05135',
                  nombre: 'Sofá Reclinable de Cuero',
                  categoria: 'Muebles',
                  empresaAsociada: 'ComfortZone',
                  descripcionCorta: 'Sofá cómodo y elegante',
                  descripcionLarga: 'El sofá reclinable de cuero de ComfortZone es perfecto para relajarte. Hecho de cuero genuino, con asientos reclinables eléctricos y puerto USB incorporado.',
                  imagenProducto: 'leather-reclining-sofa.jpg',
                  precio: 899.99,
                  cantidadDisponible: 8,
                  puntuacion: 4.7,
                  imagen: imagen75
                },
                {
                  codigo: '05136',
                  nombre: 'Aspiradora de Mano Dyson V11',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'Dyson',
                  descripcionCorta: 'Aspiradora portátil de alta potencia',
                  descripcionLarga: 'La aspiradora de mano Dyson V11 es ideal para la limpieza rápida y eficiente. Con succión potente, filtro HEPA y batería de larga duración.',
                  imagenProducto: 'dyson-v11-handheld-vacuum.jpg',
                  precio: 299.99,
                  cantidadDisponible: 18,
                  puntuacion: 4.9,
                  imagen: imagen76
                },
                {
                  codigo: '05137',
                  nombre: 'Set de Cuchillos de Cocina',
                  categoria: 'Cocina',
                  empresaAsociada: 'ChefPro',
                  descripcionCorta: 'Juego de cuchillos de chef',
                  descripcionLarga: 'El set de cuchillos de cocina de ChefPro incluye cuchillos de alta calidad para todas tus necesidades culinarias. Mangos ergonómicos y hojas de acero inoxidable.',
                  imagenProducto: 'chef-knife-set.jpg',
                  precio: 99.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.8,
                  imagen: imagen77
                },
                {
                  codigo: '05138',
                  nombre: 'Cafetera Espresso DeLonghi',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'DeLonghi',
                  descripcionCorta: 'Máquina de café espresso',
                  descripcionLarga: 'La cafetera Espresso DeLonghi te permite disfrutar de café espresso de alta calidad en casa. Con sistema de espuma de leche y ajustes de temperatura.',
                  imagenProducto: 'delonghi-espresso-machine.jpg',
                  precio: 399.99,
                  cantidadDisponible: 14,
                  puntuacion: 4.7,
                  imagen: imagen78
                },
                {
                  codigo: '05139',
                  nombre: 'Juego de Toallas de Baño de Lujo',
                  categoria: 'Baño',
                  empresaAsociada: 'LuxuryLinens',
                  descripcionCorta: 'Toallas suaves y absorbentes',
                  descripcionLarga: 'El juego de toallas de baño de lujo de LuxuryLinens incluye toallas suaves y absorbentes para tu baño. Hechas de algodón de alta calidad y diseño elegante.',
                  imagenProducto: 'luxury-bath-towel-set.jpg',
                  precio: 59.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.8,
                  imagen: imagen79
                },
                {
                  codigo: '05140',
                  nombre: 'Ventilador de Torre Oscilante',
                  categoria: 'Electrodomésticos',
                  empresaAsociada: 'CoolBreeze',
                  descripcionCorta: 'Ventilador de alta eficiencia',
                  descripcionLarga: 'El ventilador de torre oscilante de CoolBreeze proporciona un flujo de aire fresco y silencioso. Con control remoto y temporizador programable.',
                  imagenProducto: 'oscillating-tower-fan.jpg',
                  precio: 79.99,
                  cantidadDisponible: 22,
                  puntuacion: 4.7,
                  imagen: imagen80
                },
                {
                  codigo: '05141',
                  nombre: 'Set de Brochas de Maquillaje Profesional',
                  categoria: 'Maquillaje',
                  empresaAsociada: 'GlamBeauty',
                  descripcionCorta: 'Brochas de alta calidad',
                  descripcionLarga: 'El set de brochas de maquillaje profesional de GlamBeauty incluye una variedad de brochas para aplicar maquillaje de manera experta. Cerdas suaves y duraderas.',
                  imagenProducto: 'makeup-brush-set.jpg',
                  precio: 29.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.8,
                  imagen: imagen81
                },
                {
                  codigo: '05142',
                  nombre: 'Secadora de Uñas UV LED',
                  categoria: 'Uñas',
                  empresaAsociada: 'NailTech',
                  descripcionCorta: 'Secadora de uñas profesional',
                  descripcionLarga: 'La secadora de uñas UV LED de NailTech permite un secado rápido y duradero de esmalte de uñas. Con temporizador y sensor de movimiento.',
                  imagenProducto: 'uv-led-nail-dryer.jpg',
                  precio: 39.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.7,
                  imagen: imagen82
                },
                {
                  codigo: '05143',
                  nombre: 'Rizador de Pestañas de Precisión',
                  categoria: 'Pestañas',
                  empresaAsociada: 'LashGlam',
                  descripcionCorta: 'Rizador de pestañas de calidad',
                  descripcionLarga: 'El rizador de pestañas de precisión de LashGlam proporciona un rizado perfecto y duradero. Diseñado para una sujeción cómoda y efectiva.',
                  imagenProducto: 'precision-eyelash-curler.jpg',
                  precio: 12.99,
                  cantidadDisponible: 30,
                  puntuacion: 4.9,
                  imagen: imagen83
                },
                {
                  codigo: '05144',
                  nombre: 'Set de Pinzas para Cejas',
                  categoria: 'Cejas',
                  empresaAsociada: 'BrowStyle',
                  descripcionCorta: 'Pinzas de precisión',
                  descripcionLarga: 'El set de pinzas para cejas de BrowStyle incluye pinzas de alta precisión para dar forma a tus cejas. Diseño ergonómico y fácil de usar.',
                  imagenProducto: 'eyebrow-tweezer-set.jpg',
                  precio: 9.99,
                  cantidadDisponible: 25,
                  puntuacion: 4.8,
                  imagen: imagen84
                },
                {
                  codigo: '05145',
                  nombre: 'Espejo de Maquillaje Iluminado',
                  categoria: 'Espejos',
                  empresaAsociada: 'VanityGlow',
                  descripcionCorta: 'Espejo con luces LED',
                  descripcionLarga: 'El espejo de maquillaje iluminado de VanityGlow ofrece una iluminación natural y ajustable para un maquillaje perfecto. Diseño elegante y portátil.',
                  imagenProducto: 'lighted-makeup-mirror.jpg',
                  precio: 34.99,
                  cantidadDisponible: 18,
                  puntuacion: 4.7,
                  imagen: imagen85
                },
                {
                  codigo: '05146',
                  nombre: 'Cepillo Alisador de Cabello',
                  categoria: 'Cabello',
                  empresaAsociada: 'HairPro',
                  descripcionCorta: 'Cepillo alisador eléctrico',
                  descripcionLarga: 'El cepillo alisador de cabello de HairPro te permite obtener un cabello liso y sedoso en minutos. Tecnología de calentamiento rápido y ajuste de temperatura.',
                  imagenProducto: 'hair-straightening-brush.jpg',
                  precio: 27.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.9,
                  imagen: imagen86
                },
                {
                  codigo: '05147',
                  nombre: 'Estuche de Maquillaje Profesional',
                  categoria: 'Maquillaje',
                  empresaAsociada: 'GlamBeauty',
                  descripcionCorta: 'Estuche de maquillaje versátil',
                  descripcionLarga: 'El estuche de maquillaje profesional de GlamBeauty tiene compartimentos y cajones para organizar tus productos de belleza. Diseño elegante y duradero.',
                  imagenProducto: 'professional-makeup-case.jpg',
                  precio: 49.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.8,
                  imagen: imagen87
                },
                {
                  codigo: '05148',
                  nombre: 'Cepillo Facial de Limpieza',
                  categoria: 'Cuidado de la Piel',
                  empresaAsociada: 'SkinCarePro',
                  descripcionCorta: 'Cepillo de limpieza facial',
                  descripcionLarga: 'El cepillo facial de limpieza de SkinCarePro ayuda a limpiar profundamente la piel, eliminando impurezas y mejorando la apariencia de la piel. Resistente al agua.',
                  imagenProducto: 'facial-cleansing-brush.jpg',
                  precio: 19.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.7,
                  imagen: imagen88
                },
                {
                  codigo: '05149',
                  nombre: 'Secador de Pelo Profesional',
                  categoria: 'Cabello',
                  empresaAsociada: 'HairPro',
                  descripcionCorta: 'Secador de cabello de alta potencia',
                  descripcionLarga: 'El secador de pelo profesional de HairPro ofrece un secado rápido y eficiente, con ajuste de temperatura y velocidad. Ideal para el cuidado del cabello en casa o en el salón.',
                  imagenProducto: 'professional-hair-dryer.jpg',
                  precio: 59.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.8,
                  imagen: imagen89
                },
                {
                  codigo: '05150',
                  nombre: 'Kit de Maquillaje Completo',
                  categoria: 'Maquillaje',
                  empresaAsociada: 'GlamBeauty',
                  descripcionCorta: 'Kit de maquillaje para principiantes',
                  descripcionLarga: 'El kit de maquillaje completo de GlamBeauty incluye todo lo necesario para crear looks increíbles. Ideal para principiantes y amantes del maquillaje. Incluye espejo y estuche.',
                  imagenProducto: 'complete-makeup-kit.jpg',
                  precio: 39.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.9,
                  imagen: imagen90
                },
                {
                  codigo: '05151',
                  nombre: 'Tractor Agrícola Compacto',
                  categoria: 'Maquinaria Agrícola',
                  empresaAsociada: 'AgroTech',
                  descripcionCorta: 'Tractor de alta potencia',
                  descripcionLarga: 'El tractor agrícola compacto de AgroTech es ideal para trabajos agrícolas en espacios reducidos. Potente y versátil, equipado con tecnología avanzada.',
                  imagenProducto: 'compact-tractor.jpg',
                  precio: 24999.99,
                  cantidadDisponible: 5,
                  puntuacion: 4.9,
                  imagen: imagen91
                },
                {
                  codigo: '05152',
                  nombre: 'Cosechadora de Granos',
                  categoria: 'Maquinaria Agrícola',
                  empresaAsociada: 'HarvestMaster',
                  descripcionCorta: 'Cosechadora de alta eficiencia',
                  descripcionLarga: 'La cosechadora de granos de HarvestMaster es perfecta para la recolección de cultivos de granos. Con sistema de limpieza y almacenamiento integrado.',
                  imagenProducto: 'grain-harvester.jpg',
                  precio: 44999.99,
                  cantidadDisponible: 3,
                  puntuacion: 4.8,
                  imagen: imagen92
                },
                {
                  codigo: '05153',
                  nombre: 'Sembradora de Precisión',
                  categoria: 'Maquinaria Agrícola',
                  empresaAsociada: 'AgroTech',
                  descripcionCorta: 'Sembradora de alta precisión',
                  descripcionLarga: 'La sembradora de precisión de AgroTech permite una siembra uniforme y eficiente de cultivos. Equipada con GPS y control de profundidad ajustable.',
                  imagenProducto: 'precision-seeder.jpg',
                  precio: 18999.99,
                  cantidadDisponible: 8,
                  puntuacion: 4.7,
                  imagen: imagen93
                },
                {
                  codigo: '05154',
                  nombre: 'Rastrillo de Heno',
                  categoria: 'Herramientas Agrícolas Manuales',
                  empresaAsociada: 'FarmMaster',
                  descripcionCorta: 'Rastrillo para heno y paja',
                  descripcionLarga: 'El rastrillo de heno de FarmMaster es una herramienta esencial para la recolección y preparación de forraje. Diseño resistente y fácil de usar.',
                  imagenProducto: 'hay-rake.jpg',
                  precio: 399.99,
                  cantidadDisponible: 12,
                  puntuacion: 4.8,
                  imagen: imagen94
                },
                {
                  codigo: '05155',
                  nombre: 'Motoazada Eléctrica',
                  categoria: 'Herramientas Agrícolas Manuales',
                  empresaAsociada: 'AgraPower',
                  descripcionCorta: 'Motoazada para jardinería',
                  descripcionLarga: 'La motoazada eléctrica de AgraPower es perfecta para trabajos de jardinería y preparación de tierra. Motor eficiente y diseño ergonómico.',
                  imagenProducto: 'electric-tiller.jpg',
                  precio: 299.99,
                  cantidadDisponible: 10,
                  puntuacion: 4.7,
                  imagen: imagen95
                },
                {
                  codigo: '05156',
                  nombre: 'Aspersor de Riego Automático',
                  categoria: 'Riego',
                  empresaAsociada: 'AquaSprout',
                  descripcionCorta: 'Aspersor para jardines y cultivos',
                  descripcionLarga: 'El aspersor de riego automático de AquaSprout proporciona una irrigación eficiente y uniforme. Programable y fácil de instalar en áreas exteriores.',
                  imagenProducto: 'automatic-sprinkler.jpg',
                  precio: 89.99,
                  cantidadDisponible: 15,
                  puntuacion: 4.9,
                  imagen: imagen96
                },
                {
                  codigo: '05157',
                  nombre: 'Desmalezadora a Gasolina',
                  categoria: 'Herramientas Agrícolas Manuales',
                  empresaAsociada: 'PowerTrim',
                  descripcionCorta: 'Cortadora de maleza potente',
                  descripcionLarga: 'La desmalezadora a gasolina de PowerTrim es ideal para cortar maleza y vegetación densa. Motor potente y cuchillas ajustables para diferentes trabajos.',
                  imagenProducto: 'gasoline-weed-trimmer.jpg',
                  precio: 229.99,
                  cantidadDisponible: 7,
                  puntuacion: 4.8,
                  imagen: imagen97
                },
                {
                  codigo: '05158',
                  nombre: 'Abonadora de Fertilizante',
                  categoria: 'Fertilización',
                  empresaAsociada: 'AgroFeed',
                  descripcionCorta: 'Abonadora para cultivos',
                  descripcionLarga: 'La abonadora de fertilizante de AgroFeed es perfecta para la distribución uniforme de fertilizantes y nutrientes en cultivos agrícolas. Capacidad ajustable.',
                  imagenProducto: 'fertilizer-spreader.jpg',
                  precio: 149.99,
                  cantidadDisponible: 9,
                  puntuacion: 4.7,
                  imagen: imagen98
                },
                {
                  codigo: '05159',
                  nombre: 'Sierra Eléctrica para Madera',
                  categoria: 'Herramientas Agrícolas Manuales',
                  empresaAsociada: 'WoodMaster',
                  descripcionCorta: 'Sierra eléctrica de alta potencia',
                  descripcionLarga: 'La sierra eléctrica para madera de WoodMaster es perfecta para trabajos de corte en el campo. Diseño ergonómico y potente motor para un rendimiento óptimo.',
                  imagenProducto: 'electric-wood-saw.jpg',
                  precio: 179.99,
                  cantidadDisponible: 11,
                  puntuacion: 4.8,
                  imagen: imagen99
                },
                {
                  codigo: '05160',
                  nombre: 'Pala para Agricultura',
                  categoria: 'Herramientas Agrícolas Manuales',
                  empresaAsociada: 'AgroTools',
                  descripcionCorta: 'Pala resistente para agricultura',
                  descripcionLarga: 'La pala para agricultura de AgroTools es una herramienta esencial para trabajos de excavación y movimiento de tierra en el campo. Construcción robusta y duradera.',
                  imagenProducto: 'agricultural-shovel.jpg',
                  precio: 29.99,
                  cantidadDisponible: 20,
                  puntuacion: 4.9,
                  imagen: imagen100
                }
            ]);
        }, 1000);
    }, []);

    return productos;
}