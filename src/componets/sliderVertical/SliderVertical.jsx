import Classes from "./SliderVertical.module.css";
import { useState } from "react";
const SliderVertical = ({ data }) => {
  // import moverCursorImage from "../../assets/moverPuntos.png";
  const {
    cardInfo,
    card,
    sliderVertical,
    image,
    noDataMessage,
    noDataImage,
    pagination,
    next,
    prev,
    numeroPaginacion,
    world,
  } = Classes;


  const itemsPerPage = 3; // Número de comercios por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice inicial y final de los comercios para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los comercios de la página actual
  const currentPageData = data?.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={sliderVertical}>
      {currentPageData?.length > 0 ? (
        currentPageData?.map((item, index) => (
          <div className={card} key={index}>
            <div className={image}></div>
            <div className={cardInfo}>
              <h3>{item.comercio}</h3>
              <p>{item.direccion}</p>
            </div>
          </div>
        ))
      ) : (
        <div className={noDataMessage}>
          <h1>No hay puntos cercanos</h1>
          <p>Mueva el cursor para encontrar el punto de pago más cercano</p>
          {/* <img className={noDataImage} src={moverCursorImage} alt="No Data" /> */}
          <div className={world}></div>
        </div>
      )}
      {data?.length > itemsPerPage && (
        <div className={pagination}>
          <button
            className={prev}
            onClick={prevPage}
            disabled={currentPage === 1}
          ></button>
          <span className={numeroPaginacion}>{currentPage}</span>
          <button
            className={next}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          ></button>
        </div>
      )}
    </div>
  );
};

export default SliderVertical;