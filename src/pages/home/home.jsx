import React from "react";
import Carousel from "../../components/carousel/Carousel";
import { FadeIn } from "react-slide-fade-in";
import "./home.scss";

//images used on Home Page

import time from "../../images/time.png";
import money from "../../images/money.png";
import chat from "../../images/chat.png";
import people from "../../images/people.png";
import nbook from "../../images/notebook.png";
import phone from "../../images/phone.png";
import rcycle from "../../images/recycle.png";
import coin from "../../images/coin.png";
import plant from "../../images/plant.png";
import rocket from "../../images/rocket.png";
import planet from "../../images/planet.png";
import mountain from "../../images/mountain.png";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";

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
    id: 4,
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
    img: chat,
  },
  {
    id: 4,
    title: "Повышение узнаваемости бренда",
    def: "У нас есть графические дизайнеры, чтобы улучшить внешний вид упаковки продукта. Потрясающий внешний вид позволяет получить больше прибыли.",
    img: people,
  },
];

const chars = [
  {
    id: 1,
    title: "Прозрачный",
    img: phone,
  },
  {
    id: 2,
    title: "Эффективный",
    img: rcycle,
  },
  {
    id: 3,
    title: "Легко использовать",
    img: nbook,
  },
  {
    id: 4,
    title: "Прибыльный",
    img: coin,
  },
];

const plan = [
  {
    id: 1,
    title: "Новичок",
    img: plant,
  },
  {
    id: 2,
    title: "Запускать",
    img: rocket,
  },
  {
    id: 3,
    title: "Готов к масштабированию",
    img: planet,
  },
  {
    id: 4,
    title: "Создайте cвой бренд",
    img: mountain,
  },
];

const profileImages = [
  {
    id: 1,
    img: profile1,
  },
  {
    id: 2,
    img: profile2,
  },
  {
    id: 3,
    img: profile2,
  },
];

const achievements = [
  {
    id: 1,
    numbers: "99,999",
    text: "Артикул и продукты",
  },
  {
    id: 2,
    numbers: "9,999",
    text: "м² фулфилмент-центр",
  },
  {
    id: 3,
    numbers: "9,999+",
    text: "Счастливые клиенты",
  },
  {
    id: 4,
    numbers: "99",
    text: "Многолетний опыт",
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
      <img src={props.img} alt="illustration" />
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
      <div className="home home-pad">
        <Carousel />

        <FadeIn>
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
        </FadeIn>

        <FadeIn from="bottom" positionOffset={400} triggerOffset={200}>
          <div className="benefits ">
            <div className="title">
              <h2>Почему именно мы?</h2>
            </div>

            <div className="wrapper flex">
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
        </FadeIn>

        <FadeIn
          from="right"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="chars">
            <div className="container flex">
              {chars.map((char) => {
                return (
                  <div className="char flex" key={char.id}>
                    <img src={char.img} alt="illustration" />
                    <span>{char.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn
          from="bottom"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="business-plan">
            <div className="title">
              <h2>Гибкие планы для развития бизнеса</h2>
            </div>

            <div className="flex illustration">
              {plan.map((p) => {
                return (
                  <div key={p.id} className="plan">
                    <img src={p.img} alt="illustration" />
                    <h4>{p.title}</h4>
                    <p>
                      molestie qui dolor feugait enim suscipit consequat.
                      hendrerit accumsan et ut duis nibh autem aliquip dolor vel
                      sed tation delenit wisi et nulla consectetuer te veniam,
                      quis dignissim zzril ullamcorper at augue lobortis in
                      praesent dolore nisl luptatum ut ex in facilisi. tincidunt
                      erat vero Ut{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn
          from="top"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="customers">
            <div className="container flex">
              <div className="title">
                <h2> Что говорят наши клиенты</h2>
                <p>
                  От начинающих предпринимателей до признанных брендов
                  электронной коммерции, узнайте, что говорят наши клиенты о
                  нашей сети фулфилмент-центров 3PL и команде преданных своему
                  делу профессионалов фулфилмента.{" "}
                </p>
              </div>

              {profileImages.map((img) => {
                return (
                  <div className="customer" key={img.id}>
                    <div className="profile-pic">
                      <img src={img.img} alt="" />
                    </div>
                    <div className="feedback">
                      <p>
                        Уsse veniam, iriure dolor sit vel dolor ut aliquip zzril
                        consectetuer illum molestie nostrud augue vel feugiat
                        suscipit ea consequat. aliquam commodo delenit ex diam
                        et magna ullamcorper laoreet odio illum molestie nostrud
                        augue vel feugiat suscipit ea consequat. aliquam commodo
                        delenit ex diam et magna ullamcorper laoreet odio
                      </p>

                      <div>
                        <h5>Имя</h5>
                        <span>Профессия</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn
          from="left"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="achievements">
            <div className="container flex">
              {achievements.map((ach) => {
                return (
                  <div key={ach.id}>
                    <h4>{ach.numbers}</h4>
                    <p>{ach.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Home;
