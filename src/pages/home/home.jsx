import React from "react";
import "./home.scss";
import order from "../../images/order.png";
import time from "../../images/time.png";
import money from "../../images/money.png";
import people from "../../images/people.png";

const stats = [
  {
    id: 1,
    number: "100%",
    quality: "Точность заказа",
    smallText: "Гарантировано",
  },
  {
    id: 2,
    number: "100%",
    quality: "Отправленный",
    smallText: "на следующий день",
  },
  {
    id: 3,
    number: "100%",
    quality: "Туркменистан",
    smallText: "Клиентские услуги",
  },
  {
    id: 1,
    number: "1-2 дня",
    quality: "Земля Туркменистан",
    smallText: "Сеть доставки",
  },
];

const benefits = [
  {
    id: 1,
    title: "Экономия времени",
    def: "С нами вы получаете целую профессиональную команду и экспертов в Туркменистане для работы над вашими проектами.",
    img: time,
  },
  {
    id: 2,
    title: "Получение большей прибыли",
    def: "У нас есть графические дизайнеры, чтобы улучшить внешний вид упаковки продукта. Потрясающий внешний вид позволяет получить больше прибыли.",
    img: money,
  },
  {
    id: 3,
    title: "Получение большей лояльности клиентов",
    def: "Отличные продукты говорят с вашей аудиторией. Клиенты любят бренд, который приносит пользу и решает их болевые точки.",
    img: people,
  },
  {
    id: 4,
    title: "Повышение узнаваемости бренда",
    def: "У нас есть графические дизайнеры, чтобы улучшить внешний вид упаковки продукта. Потрясающий внешний вид позволяет получить больше прибыли.",
    img: people,
  },
];

function Stat(props) {
  return (
    <div className="stat">
      <span>{props.number}</span>
      <span>{props.quality}</span>
      <small>{props.smallText}</small>
    </div>
  );
}

function Benefit(props) {
  return (
    <div className="benefit flex">
      <img src={props.img} alt={props.img.toString()} />
      <div>
        <h4>{props.title}</h4>
        <p>{props.def}</p>
      </div>
    </div>
  );
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="welcome-text flex">
          <div>
            <h3>Самый умный способ выполнить ваши онлайн-заказы.</h3>
            <p>
              quis tincidunt ea iusto Lorem ex eu enim augue dignissim lobortis
              suscipit aliquip elit, odio vel ullamcorper amet, et veniam, vel
              facilisi. volutpat. dolor nonummy minim qui wisi in euismod
              dignissim lobortis suscipit aliquip elit, odio vel ullamcorper
              amet, et veniam, vel facilisi.
            </p>
          </div>
          <img src={order} alt="welcome" />
        </div>

        <div className="stats flex">
          {stats.map((stat) => {
            return (
              <Stat
                number={stat.number}
                key={stat.id}
                quality={stat.quality}
                smallText={stat.smallText}
              />
            );
          })}
        </div>

        <div className="benefits flex">
          {benefits.map((ben) => {
            return (
              <Benefit
                img={ben.img}
                title={ben.title}
                def={ben.def}
                key={ben.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
