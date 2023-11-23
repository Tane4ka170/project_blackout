import React from "react";

import { TotalIncome, TotalExpense } from "shared/Total";



const Home = () => {

  return (
    <section>
      <div>
        <h1>Expense log</h1>
        <p>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</p>
      </div>
      <div>
        <ul>
          <li>
            {/* Тут будет компонент Total Income */}
            <TotalIncome/>
          </li>
          <li>
            {/* Тут будет компонент Total Expense */}
            <TotalExpense/>
          </li>
        </ul>
      </div>
      <main>
        <div>
          {/*  тут буде Form for login expense or income */}
        </div>
        <div>
          {/* и будет Donut  */}
        </div>
      </main>
    </section>
  );
};

export default Home