// base
import React from "react";

// svg
import arrow from '../../images/Sprite.svg'

// components
import Currency from "components/Currency/Currency";



const TotalIncome = () => {
  const totalIncome = 650
  const currency = Currency('uah')

  return (
    <div>
      <div>
        {/* Тут будет SVG */}
        <svg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-UP'}/>
        </svg>
      </div>
      <div>
        <p>Total income</p>
        <p>{`${currency}${totalIncome}`}</p>
      </div>
    </div>
  );
};




export default TotalIncome;