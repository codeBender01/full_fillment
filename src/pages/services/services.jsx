import React from "react";
import Title from "../../components/title/Title";
import Form from "../../components/form/Form";

import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import "./services.scss";

const serviceTypes = [
  {
    id: 1,
    text: "Электронная коммерция",
  },
  {
    id: 2,
    text: "Розница Опт Распределение",
  },
  {
    id: 3,
    text: "Выполнение многоканальных продаж",
  },
  {
    id: 4,
    text: "Международная касса с оплатой пошлины",
  },
  {
    id: 5,
    text: "комплектация & Сборка",
  },
  {
    id: 6,
    text: "Услуги ящика подписки",
  },
  {
    id: 7,
    text: "Данные приборной панели, и аналитика",
  },
  {
    id: 8,
    text: "Подготовка к ФБА и ФБМ",
  },
];

function Service(props) {
  return (
    <div className="service-type">
      <h3>{props.text}</h3>
    </div>
  );
}

class Services extends React.Component {
  render() {
    return (
      <div className="services pad">
        <Title text="Наши услуги делают выполнение заказа легким" />
        <div className="types">
          {serviceTypes.map((ser) => {
            return <Service key={ser.id} text={ser.text} />;
          })}
        </div>

        <Form />
      </div>
    );
  }
}

export default Services;
