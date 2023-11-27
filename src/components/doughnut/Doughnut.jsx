import React, { useRef, useState } from 'react';
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

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = ['#0EBB69', '#0EF387', '#FAFAFA', 'rgba(250, 250, 250, 0.20)'];

const chartOptions = {
  hoverOffset: [30],
  rotation: [-90],
  circumference: [180],
  maintainAspectRatio: false,
  width: [280],
  height: [140],
};

const DoughnutComponent = () => {
  const listRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const textCenter = {
    id: 'textCenter',
    beforeDatasetDraw(chart,
      args,
      pluginOptions
    ) {
      const {
        ctx,
        // data
      } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.font = '54px';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FAFAFA';
      ctx.textBaseline = 'bottom';

      const displayText = selectedItem
        ? `${selectedItem.number}%`
        : 'Ваш текст';
      ctx.fillText(`${displayText}%`, xCenter, yCenter);
    },
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Мій перший набір даних',
        data: [300, 50, 100],
        backgroundColor: colors,
        borderWidth: 0,
      },
    ],
  });

  const [items, setItems] = useState([
    {
      name: 'Хобі1',
      number: 45,
      id: 0,
    },
    {
      name: 'Хобі2',
      number: 45,
      id: 1,
    },
    {
      name: 'Хобі3',
      number: 45,
      id: 2,
    },
  ]);

  const handleChartHover = elements => {
    if (elements.length > 0) {
      const clickedElement = elements[0];
      const index = clickedElement.index;

      // Оновлюємо вибраний елемент
      setSelectedItem(items[index]);

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

  const addDataPoint = () => {
    const newDataPoint = {
      name: `Хобі ${items.length + 1}`,
      number: Math.floor(Math.random() * 50) + 1, // Генеруємо випадкове значення в межах 1-50
      id: items.length,
    };

    const newColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.8)`;

    // Оновлюємо стан графіка
    setChartData(prevData => ({
      labels: [],
      datasets: [
        {
          data: [...(prevData.datasets[0]?.data || []), newDataPoint.number],
          backgroundColor: [
            ...(prevData.datasets[0]?.backgroundColor || []),
            newColor,
          ],
          borderWidth: 0,
        },
      ],
    }));

    // Оновлюємо стан списку
    setItems(prevItems => [...prevItems, newDataPoint]);
  };

  return (
    <Wrapper>
      <h2>Категорії витрат</h2>
      <MainWrapper>
        <DoughnutWrapper>
          <Doughnut
            data={chartData}
            options={{
              ...chartOptions,
              onHover: (_, elements) => handleChartHover(elements),
            }}
            plugins={[textCenter]}
          />
        </DoughnutWrapper>
        <ListWrapper ref={listRef}>
          <ListStyled>
            {items?.map((item, index) => (
              <ItemStyled
                data-id={index}
                key={item.id}
                color={chartData.datasets[0]?.backgroundColor[index]}
              >
                <p>{item.name}</p>
                <p>{item.number}%</p>
              </ItemStyled>
            ))}
          </ListStyled>
        </ListWrapper>
        <button data-id={items.length} onClick={addDataPoint}>
          Додати дані
        </button>
      </MainWrapper>
    </Wrapper>
  );
};

export default DoughnutComponent;
