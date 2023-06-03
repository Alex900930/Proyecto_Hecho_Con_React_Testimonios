import Testimonios from "./components/Testimonios";
import './App.css';
import './components/imagenes/imagen-teresa.jpeg'
function App() {
  return (
    
    <div className="contenedor-principal-app">
      <h1 className="estilo-titulo1">Testimonios</h1> <br />
      <div className="componentes">
      <Testimonios titulo="Duro toda la tarde noche sin tener que retocar nada"
                    parrafo="Fue todo fantástico y no tuve ni qué usar los matificantes de lo bien que hiciste el maquillaje. Todas estamos increíblemente contentas con tu trabajo. Nos pusiste a todas preciosas y duró toda la tarde y noche sin tener que retocar nada.  Excelente trabajo!!! "
                    nombre="Cristina P."
                    fecha= "29-10-2022"
                    imagen= "cristina"
                    />
      <Testimonios titulo="Muy contenta con el trabajo de Vanesa"
                    parrafo="La verdad que estoy muy contenta con el trabajo de Vanesa, la encontré gracias a mi peluquera que me la recomendó. La prueba de maquillaje fue súper. Ahí ya quede convencida. El día de la boda fue como se había planificado, así que ya os podéis imaginar que estuvo genial. Muchas gracias por todo. Os la recomiendo. "
                    nombre="M Teresa"
                    fecha= "08-10-2022"
                    imagen= "teresa"
                    />
      <Testimonios titulo="Ella es muy profesional y receptiva"
                    parrafo="Quedé muy contenta con mi maquillaje el día de mi boda. Le mostré las fotos del maquillaje que tenía en mente y Vanessa logró exactamente lo que yo quería. Mi madre y mis amigas también se maquillaron con Vanessa y quedaron felices. Más allá del gran talento de Vanessa, ella es muy profesional y receptiva con las sugerencias que uno tiene. Definitivamente la recomiendo. "
                    nombre="Nancy"
                    fecha= "24-09-2022"
                    imagen= "nancy"
                    />                          
      </div>
    </div>
  );
}

export default App;
