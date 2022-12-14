import React from "react";
import "./technologies.scss";
import Title from "../../components/title/Title";
import Form from "../../components/form/Form";
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
    id: 4,
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
      <div className="technologies pad">
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
        <div className="integrations">
          <div className="container">
            <Title text="Бесконечные готовые интеграции" />
            <p>
              Наши простые настраиваемые API-интерфейсы и готовые плагины для
              популярных корзин покупок и платформ электронной коммерции
              обеспечивают простую интеграцию, автоматизацию заказов в режиме
              реального времени, а также полную видимость и точность запасов.
            </p>
          </div>
        </div>

        <div className="container sales">
          <h1>Международные продажи стали проще</h1>
          <p>
            Наша компания — это решение для трансграничных продаж с оплатой
            пошлины, которое позволяет розничным продавцам электронной коммерции
            легко открывать свои двери для международных продаж. Розничные
            продавцы получают больше конверсий, предлагая полную прозрачность
            продаж, предоплату пошлин и налогов, оплату в местной валюте и
            экономичные тарифы на доставку. Конечные потребители получают свои
            заказы быстро и покупают больше, когда знают все первоначальные
            затраты.{" "}
          </p>
        </div>

        <Form />
      </div>
    );
  }
}

export default Technologies;
