import { useState, useEffect } from "react";
// Importa los hooks 'useState' y 'useEffect' de React.
// 'useState' permite manejar el estado en el componente.
// 'useEffect' permite ejecutar efectos secundarios, como hacer una petici�n a una API, despu�s de que el componente se monte.

const API_KEY = import.meta.env.VITE_GIPHY_KEY;
console.log("API_KEY:", API_KEY); // <-- Log aquí de depuración
// Obtiene la API key desde las variables de entorno usando Vite
// Este API_KEY se usa para autenticar las peticiones a la API de Giphy.

const GridGif = ({ category }) => {
    // El componente 'GridGif' recibe 'category' como prop. 
    // Esta es la categor�a que se utilizar� para buscar gifs relacionados en la API de Giphy.

    const [gifs, setGifs] = useState([]);
    // useState define 'gifs' como el estado que contendr� los gifs obtenidos de la API.
    // Inicialmente, 'gifs' es un array vac�o.

    const getGifs = async () =>  {
        //DEPURACIÓN.
        console.log("Consultando gifs para categoría:", category);

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=8&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        console.log("URL de consulta:", url);

        try {
            const resp = await fetch(url);
            const { data } = await resp.json();
            console.log("Respuesta de Giphy:", data);

            const gifs = data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.fixed_height.webp,
            }));

            setGifs(gifs);
        } catch (error) {
            console.error("Error al obtener gifs:", error);
        }
        };

    useEffect(() => {
        getGifs();
        // Ejecuta la funci�n 'getGifs' cuando el componente se monta (al principio), para hacer la petici�n y obtener los gifs de la API.
    }, []);
    // El array vac�o como segundo argumento indica que este efecto solo debe ejecutarse una vez, justo despu�s del primer renderizado.

    return (

        //********************************************        PONEMOS EL FRONT MÁS BONITOOOO                                 ****************************************************** */

        <div className="row">
            {gifs.map((gif) => (
                <div key={gif.id} className="col-12 col-md-4 col-lg-3 mb-4">
                    <div className="card shadow-lg border-0 rounded">
                        {/* Card con bordes redondeados y sombra */}
                        <img
                            src={gif.url}
                            alt={gif.title}
                            className="card-img-top rounded"
                            style={{ height: 'auto', width: '100%' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title text-center">{gif.title}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridGif;