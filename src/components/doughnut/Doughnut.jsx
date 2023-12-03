import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import randomColor from 'randomcolor';

import { selectTransaction } from 'redux/transactions/selectors';

import {
  DoughnutWrapper,
  ItemStyled,
  ListStyled,
  ListWrapper,
  MainWrapper,
  StatisticsPlug,
  Wrapper,
} from './Doughnut.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutComponent = () => {
  const listRef = useRef(null);

  const queryTransactions = useSelector(selectTransaction);
  const dispatch = useDispatch();

  const [allSums, setAllSums] = useState(0);
  const [items, setItems] = useState(null);

  const data = () => {
    const newData = items?.map(item => item.sum);
    const segmentColors = items?.map(() => randomColor());
    return {
      labels: [],
      datasets: [
        {
          data: newData,
          backgroundColor: segmentColors,
          borderWidth: 0,
        },
      ],
    };
  };

  useEffect(() => {
    getCategoryesTransactions(queryTransactions);
  }, [dispatch, queryTransactions]);

  const chartOptions = {
    hoverOffset: [20],
    rotation: [-90],
    circumference: [180],
    maintainAspectRatio: false,
    width: [280],
    height: [140],
  };

  function getCategoryesTransactions(transactions) {
    if (transactions) {
      const categorySums = {};
      transactions.forEach(item => {
        const categoryName = item.category?.categoryName;
        if (categoryName) {
          if (categorySums[categoryName]) {
            categorySums[categoryName] += item.sum;
          } else {
            categorySums[categoryName] = item.sum;
          }
        }
        const totalSum = transactions.reduce((acc, item) => acc + item.sum, 0);
        const newItems = Object.keys(categorySums).map(categoryName => ({
          category: { categoryName },
          sum: categorySums[categoryName],
          percentage: ((categorySums[categoryName] / totalSum) * 100).toFixed(
            2
          ),
        }));
        setItems(newItems);
        setAllSums(totalSum);
      });
    }
  }

  const handleChartHover = elements => {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      const index = clickedElement.index;

      if (listRef.current) {
        const listItem = listRef.current.querySelector(`[data-id="${index}"]`);

        if (listItem) {
          listItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        }
      }
    }
  };

  return (
    <Wrapper>
      <h2>Expenses categories</h2>
      {!items?.length && (
        <StatisticsPlug>
          Add at least 1 expense to see "doughnut" chart here📊
        </StatisticsPlug>
      )}
      <MainWrapper>
        <DoughnutWrapper>
          <Doughnut
            data={data()}
            options={{
              ...chartOptions,
              onHover: (_, elements) => handleChartHover(elements),
            }}
          />
        </DoughnutWrapper>
        <ListWrapper ref={listRef}>
          <ListStyled>
            {items?.map((transaction, index) => (
              <ItemStyled
                data-id={index}
                key={index}
                color={data().datasets[0]?.backgroundColor[index]}
              >
                <p>{transaction.category?.categoryName}</p>
                <p>{`${((transaction.sum / allSums) * 100).toFixed(2)}%`}</p>
              </ItemStyled>
            ))}
          </ListStyled>
        </ListWrapper>
      </MainWrapper>
    </Wrapper>
  );
};

export default DoughnutComponent;
