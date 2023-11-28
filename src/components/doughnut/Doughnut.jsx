import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import {
  DoughnutWrapper,
  ItemStyled,
  ListStyled,
  ListWrapper,
  MainWrapper,
  Wrapper,
} from './Doughnut.styled';
import { selectTransaction } from 'redux/transactions/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutComponent = () => {
  const listRef = useRef(null);
  const queryTransactions = useSelector(selectTransaction);
  const [allSums, setAllSums] = useState(null);
  const [items, setItems] = useState(null);

  const colors = [
    '#007E7E',
    '#00FF00',
    '#57FF57',
    '#008A8A',
    '#009A9A',
    '#00C5C5',
    '#006666',
    '#00B2B2',
    '#00DADA',
    '#005C5C',
    '#007272',
    '#00E5E5',
    '#004040',
    '#00A5A5',
    '#00F0F0',
    '#003434',
    '#009292',
    '#00CDCD',
    '#002E2E',
    '#00FFFF',
    '#001919',
    '#00D5D5',
    '#006262',
    '#003D3D',
    '#00AAAA',
    '#002323',
    '#00BFBF',
    '#00ECEC',
    '#004747',
    '#00F5F5',
    '#000A0A',
    '#00CACA',
    '#005353',
    '#00F2F2',
    '#008080',
    '#001E1E',
    '#00F7F7',
    '#000505',
    '#00A9A9',
    '#009090',
    '#000000',
  ];
  const chartOptions = {
    hoverOffset: [30],
    rotation: [-90],
    circumference: [180],
    maintainAspectRatio: false,
    width: [280],
    height: [140],
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [0],
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  });

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

  useEffect(() => {
    if (queryTransactions) {
      const categorySums = {};

      queryTransactions.forEach(item => {
        const categoryName = item.category?.categoryName;

        if (categoryName) {
          if (categorySums[categoryName]) {
            categorySums[categoryName] += item.sum;
          } else {
            categorySums[categoryName] = item.sum;
          }
        }
      });

      const totalSum = queryTransactions.reduce(
        (acc, item) => acc + item.sum,
        0
      );

      const items = Object.keys(categorySums).map(categoryName => ({
        category: { categoryName },
        sum: categorySums[categoryName],
        percentage: ((categorySums[categoryName] / totalSum) * 100).toFixed(2),
      }));

      setItems(items);
    }
  }, [queryTransactions]);

  useEffect(() => {
    if (items) {
      const sumByCategory = items.reduce((acc, transaction) => {
        const categoryName = transaction.category?.categoryName;
        if (categoryName) {
          acc[categoryName] = (acc[categoryName] || 0) + transaction.sum;
        }
        return acc;
      }, {});

      const sortedItems = [...items].sort((a, b) =>
        a.category.categoryName > b.category.categoryName ? 1 : -1
      );

      const newData = Object.values(sumByCategory);

      setChartData(prevData => ({
        labels: [],
        datasets: [
          {
            data: newData,
            backgroundColor: [
              ...(prevData.datasets[0]?.backgroundColor || []),
              colors,
            ],
            borderWidth: 0,
          },
        ],
      }));

      const totalSum = sortedItems.reduce(
        (acc, transaction) => acc + transaction.sum,
        0
      );
      setAllSums(totalSum);
    }
  }, [items]);

  return (
    <Wrapper>
      <h2>Expenses categories</h2>
      <MainWrapper>
        <DoughnutWrapper>
          <Doughnut
            data={chartData}
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
                color={chartData.datasets[0]?.backgroundColor[index]}
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
