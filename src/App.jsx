import HelloWorld from './componentes/myComponente';
import AddCategory from './componentes/myCategoria';
import GridGif from './componentes/myGridCategory';
import ListGroup from './componentes/myListGroup';
import { useState } from "react";

const App = () => {
    // Componente principal de la aplicación.

    const [categories, setCategories] = useState([]);
    // Define 'categories' como el estado para almacenar las categorías que el usuario ingresa.
    // Inicialmente es un array vacío, lo que significa que no hay categorías seleccionadas.
    const[selectedCategory, setSelectedCategory] = useState(null); // ← NUEVO estado


    return (

      //****************************************************                       VAMOS A PONER EL FRONT MÁS LINDOOO         ********************************** */
        <div className="container mt-5 mb-5">
            {/* Fondo bonito y contenedor centrado */}
            <div className="text-center">
                <h1 className="display-3 text-primary mb-4">PARCHE GIF</h1>
                <p className="lead text-muted">Una elegancia de Gifs mpp😎</p>
            </div>

            <div className="row justify-content-center mb-4">
                {/* Agregamos el componente para añadir categorías */}
                <AddCategory categories={categories} setCategories={setCategories} />
            </div>

            <h2 className="text-center mb-3 text-secondary">Categorías disponibles</h2>
            <div className="row justify-content-center">
                {/* Lista de categorías con un diseño atractivo */}
                <ListGroup
                    items={categories}
                    onSelectItem={(category) => setSelectedCategory(category)} 
                />
            </div>

            {/* Solo muestra el GridGif si se ha seleccionado una categoría */}
            {selectedCategory && (
                <div className="row justify-content-center mt-5">
                    <GridGif key={selectedCategory} category={selectedCategory} />
                </div>
            )}
        </div>
    );
};

export default App;
