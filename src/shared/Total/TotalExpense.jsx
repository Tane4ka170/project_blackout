import React from "react";
// import { UseSelector } from "react-redux/es/hooks/useSelector";

import arrow from '../../images/Sprite.svg'
import Currency from "components/Currency/Currency";

const TotalExpense = () => {
  // Место под юзСелектор но пока нету что селектить)
  const totalIncome = 150
  const currency = Currency('uah')

  return (
    <div>
      <div>
        {/* Тут будет SVG */}
        <svg width={18} height={18}>
          <use href={arrow + '#icon-Arrow-DWN'}/>
        </svg>
      </div>
      <div>
        <p>Total expense</p>
        <p>{`${currency}${totalIncome}`}</p>
      </div>
    </div>
  );
}


export default TotalExpense;