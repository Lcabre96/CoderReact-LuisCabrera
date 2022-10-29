import './categorias.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container">
            <h2>{greeting}</h2>
            <div className='categorias'>
                <li><a href="#">Zapatillas</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Buzos</a></li>
            </div>
        </div>
    )
}

export default ItemListContainer