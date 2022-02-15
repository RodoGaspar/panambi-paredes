import React, {useState} from "react";
import './ItemCount.css'

const Contador = ({stock, initial, onAdd}) =>{
  const [number, setNumber] = useState(0);

  const mas = () =>{
      number < stock && setNumber(number+ 1);
  };
  const menos = () => {
      number > initial && setNumber(number-1);
  };
 
const addToKart = () => {
    alert('Agregaste ' + number + ' productos al carrito')
};
  
  return(
      <div className="tarjeta">
          <div>
              <button disabled={number>=stock} onClick={mas} className="tarjBtnMas">+</button>
              <p className="numerito">{number}</p>
              <button className="tarjBtnMenos" /* disabled={number<=initial} */ onClick={menos} >-</button>
              <button /* disabled={number === 0 || stock === 0} */ onClick={()=> number > 0 ? addToKart(): null} className="addTo" >Agregar al carrito</button>
          </div>
      </div>
  );
};

export default Contador;