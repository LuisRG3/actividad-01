import imagen1 from '../imagenes/perfil/carnet.jpg';

const users = [
    { 
      username: 'adm', 
      password: '123',
      imagen: imagen1,
      nombre: 'Luis Alberto',
      apellidoPaterno:'Ruiz',
      apellidoMaterno:'Guzman',
      descripcion: 'Profesional en ingeniería de sistemas, me apasiona la programación y el desarrollo de software, actualmente trabajo para una entidad recaudadora de impuestos de mi país desarrollando aplicativos basados en tecnologías de microservicios: java, gitlab, kubernetes y bamboo aplicando integración continua.',
      pais:'Perú',
      departamento:'Ancash',
      ciudad:'Casma',
      correo:'luis.ruiz.guzman@hotmail.com'
    },
    { 
      username: 'usuario2', 
      password: 'password2',
      imagen: imagen1,
      nombre: 'Prueba Nombre',
      apellidoPaterno:'Prueba Paterno',
      apellidoMaterno:'Prueba Materno',
      descripcion: 'Prueba Descripcion',
      pais:'Prueba Pais',
      departamento:'Prueba Departamento',
      ciudad:'Prueba Ciudad',
      correo:'Prueba Correo'
    }
  ];

export default users;