/** React Tres Aventuras
 * 
 *  Este archivo tiene que tomar las fotos y videos de instagram (por el momento el mío) y mostrarlas
 *  en una tira vertical desplazable usando React.js para repetir una plantilla
 */

/** hace un pedido HTTP a instagaram y genera la promesa de obtener los datos */
const token = "IGQVJXb0pQRmxQaFdybWVwS1Jfd3ctT3puUDVBRWl4SjRXaW1MZAzh2cThMd0RyY1VoZAkhKUUlxYjN0aWhyNnYwNmtCRVBCblpBc2VtU1k1bXh2RVRUXzRKVXlqM1JnelNWT2QwbXRyN2FLOUdwS1JoZAwZDZD";
const URL = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=" + token
const pedidoHTTP = fetch(URL).then(revisar).then(extraer);
/** Convierte los datos en formato JSON */
function revisar (arg) {
    return arg.json();
}

/** Una vez que la promesa se cumple (los datos llegan del servidor de instagram) esta funcion devuelve un objeto JSON
 *  con todos los datos pedidos.
 */
async function extraer (arg) {
    const lista = await arg.data;
 
    console.log(lista);
    const root = ReactDOM.createRoot(document.getElementById('galeria-cuerpo'));
    root.render(<Galeria url={lista[0].media_url}/>);   
}

/** Componente padre de toda la galeria de imagenes */
class Galeria extends React.Component {
    render () {
        return (<video controls>
                    <source src={this.props.url}/>
                </video>);    
    }
}

