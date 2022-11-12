import 'bootstrap/dist/css/bootstrap.min.css';
import './categorias.css'
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react'
import {gFetch} from '../../utils/gFetch'
import { Link, useParams } from 'react-router-dom';


const ItemListContainer = (obj) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId) {
        gFetch()
            .then(resp =>  setProducts(resp.filter(prod => prod.categoria === categoriaId)))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))  
            
        } else {
        gFetch()
            .then(resp =>  setProducts(resp))    
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))   
        }
    }, [categoriaId]);

    console.log(products)

  

    return (
      loading 
      ? 
          <h2 className='text-center mt-5'>Cargando...</h2>            
      :
          <div className='row text-center'>
              <h1>ItemListContainer</h1>  
              <div className='d-flex flex-row flex-wrap justify-content-center align-items-center gap-3'>
                    { products.map( obj => <section key={obj.id}>
                                                <Link to={`/detail/${obj.id}`}>
                                                        <div className="card text-center text-dark" style={{width: '18rem'}} >
                                                            <img className="card-img-top img-fluid" src={obj.img} alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title text-center">{obj.name}</h5>
                                                                <p>$ {obj.price}</p>
                                                                <button className="btn btn-primary">Ver Detalle</button>
                                                            </div>
                                                        </div>
                                                </Link>
                                               
                                            </section>
                                        
                                        )  }     
              </div>
          </div>




       /*  <div className="Container">
            <h2>{greeting}</h2>
            <div className='categorias'>
                <li><a href="#">Zapatillas</a></li>
                <li><a href="#">Remeras</a></li>
                <li><a href="#">Buzos</a></li>
            </div> 
        </div> */
    )
}

export default ItemListContainer