import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData, getItemsByCategory } from "../data-base/firestore";
import { DotPulse } from "@uiball/loaders";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoria } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    if (categoria === undefined) {
      getData()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(categoria)
        .then((respuestaDatosFiltrados) => {
          setData(respuestaDatosFiltrados);
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoria]);

  return (
    <div>
      {isLoading ? (
        <div className="loading-inicio">
          <DotPulse size={55} speed={1.3} color="black" />
        </div>
      ) : (
        <div>
          <h1 className="titulo">Productos</h1>
          <ItemList data={data} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
