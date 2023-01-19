/** React Tres Aventuras
 * 
 *  Este archivo tiene que tomar las fotos y videos de instagram (por el momento el mío) y mostrarlas
 *  en una tira vertical desplazable usando React.js para repetir una plantilla
 */

/* Toda esta seccion esta desactivada hasta que vuelva a intentar conectar con IG

/** hace un pedido HTTP a instagaram y genera la promesa de obtener los datos */
const token = "IGQVJYS3VoOURWWlVCNTd3ZAGJWWVQzejVpYTR2TWtZAWlBSbTdBX2tjZAm10RTR6LWlCaXZAEQTl5Qkx2dXVKUnNBX2ZAZASERkT3ZArUEFfNXFTRnJRUnlrcTFZAMmpPdFhqSnhfOE9ndVl1TkRvb2RieHBCMwZDZD";
const URL = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=" + token
/** const pedidoHTTP = fetch(URL).then(revisar).then(extraer); */

/** Convierte los datos en formato JSON */
/*
function revisar(arg) {
    return arg.json();
}
*/

/** Una vez que la promesa se cumple (los datos llegan del servidor de instagram) esta funcion devuelve un objeto JSON
 *  con todos los datos pedidos.
 */
/*
async function extraer(arg) {
    const lista = await arg.data;

    console.log(lista);
    const root = ReactDOM.createRoot(document.getElementById('galeria-cuerpo'));
    root.render(<Galeria caption={lista[0].caption} url={lista[0].thumbnail_url} />);
}
*/

function encapsularFoto(foto) {
    const imagen = <Imagen url={foto.url}></Imagen>;
    const miniatura = <Tarjeta contenido={imagen}></Tarjeta>;

    return miniatura;
}

async function recopilarFotos() {
    const contenido = await fetch("../data/fotos.json");
    const texto = await contenido.text();
    const fotos = JSON.parse(texto);

    const listaElementosGaleria = fotos.map(encapsularFoto);
    const cuerpoGaleria = <div className="galeria">{listaElementosGaleria}</div>;

    const root = ReactDOM.createRoot(document.querySelector(".lienzo"));
    root.render(cuerpoGaleria);
}

recopilarFotos();



function Imagen(props) {
    return <img src={props.url}></img>;
}

function Tarjeta(props) {
    return <div className="tarjeta">{props.contenido}</div>;
}



