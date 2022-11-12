import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../utils/gFetch";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    gFetch().then((res) => {
      setProduct(res.filter((el) => el.id === productId));
      console.log(product);
    });
  }, []);


  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades al carrito.`)

  }


  return (
    <>
      {product.map((obj) => (
        <center key={obj.id}>
          <div  className="card w-75 mx-1">
            <center>
              <h5 className="card-header">{obj.categoria} #{obj.id}</h5>
            </center>
            <div className="card-body">
              <center>
                <img src={obj.img} className="w-25 img-fluid" />
              </center>
            </div>
            <div className="card-footer">
              <p>Price: {obj.price}</p>
            </div>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          </div>
        </center>
      ))}
    </>
  );
};

export default ItemDetail;
