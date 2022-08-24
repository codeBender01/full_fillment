import React from "react";
import "./technologies.scss";
import Title from "../../components/title/Title";
import tick from "../../images/tick.png";

const services = [
  {
    id: 1,
    title: "Управление запасами",
    chars: [
      {
        id: 1,
        text: "Полный контроль",
      },
      {
        id: 2,
        text: "Полная видимость и точность",
      },
      {
        id: 3,
        text: "Обновления Live Sync",
      },
    ],
  },
  {
    id: 2,
    title: "Мониторинг продаж",
    chars: [
      {
        id: 1,
        text: "Метрики заказа и единицы измерения",
      },
      {
        id: 2,
        text: "Электронная коммерция и розничная торговля",
      },
      {
        id: 3,
        text: "Оптовая торговля и электронный обмен данными",
      },
    ],
  },
  {
    id: 3,
    title: "Надежная аналитика",
    chars: [
      {
        id: 1,
        text: "Интеллектуальные информационные панели",
      },
      {
        id: 2,
        text: "Диаграммы и графики в реальном времени",
      },
      {
        id: 3,
        text: "Многоканальная сегментация",
      },
    ],
  },
  {
    id: 1,
    title: "Подробная отчетность",
    chars: [
      {
        id: 1,
        text: "Продажи и выручка",
      },
      {
        id: 2,
        text: "Время доставки в пути",
      },
      {
        id: 3,
        text: "Получение и инвентаризация",
      },
    ],
  },
];

function Service(props) {
  return (
    <div className="service">
      <h3>{props.title}</h3>

      {props.chars.map((char) => {
        return (
          <div className="tick" key={char.id}>
            <img src={tick} alt="tick" />
            <span>{char.text}</span>
          </div>
        );
      })}
    </div>
  );
}

class Technologies extends React.Component {
  render() {
    return (
      <div className="technologies">
        <Title text="Наше программное обеспечение создано, чтобы помочь вам масштабироваться" />
        <div className="container">
          <p>
            Мы не изобретали выполнение заказов и управление запасами, но наша
            запатентованная технология изменила представление об опыте
            выполнения заказов в электронной коммерции. Мы создали преобразующие
            и передовое программное обеспечение для управления складом (WMS),
            которое предоставляет информативные отчеты на панели инструментов,
            аналитику и интегрированные глобальные инструменты электронной
            коммерции с оплатой за доставку.
          </p>

          <div className="services">
            {services.map((ser) => {
              return (
                <Service key={ser.id} title={ser.title} chars={ser.chars} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
