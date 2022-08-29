import React from "react";
import Title from "../../components/title/Title";
import Form from "../../components/form/Form";
import "./about.scss";

import { FadeIn } from "react-slide-fade-in";

//images

import growth from "../../images/growth.png";
import client from "../../images/clientexpert.png";
import watch from "../../images/watch.png";
import care from "../../images/care.png";
import optimize from "../../images/optimize.png";
import saving from "../../images/saving.png";
import decision from "../../images/decision.png";

class About extends React.Component {
  render() {
    return (
      <div className="about pad">
        <Title text="О нас" />
        <p>
          Совершенство в сфере электронной коммерции — наша страсть, и наша
          приверженность нашим клиентам демонстрируется ежедневно. Мы делаем все
          возможное, чтобы помочь решить ежедневные операционные задачи, чтобы
          превзойти ожидания уровня обслуживания. Ваши клиенты получат
          потребительский опыт мирового класса с быстрой доставкой в ​​любую
          точку мира. Не будет никаких сюрпризов или скрытых платежей, и они
          будут отслеживаться от двери до двери с момента размещения заказа.{" "}
        </p>

        <div className="work">
          <div className="container">
            <h1>Как мы работаем</h1>
            <FadeIn
              from="right"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={200}
            >
              <div className="work-type">
                <div className="text">
                  <h3>Исполнение стало проще</h3>
                  <p>
                    <b>Имя компании</b> признана ведущим, надежным и
                    <b> технологически продвинутым </b>
                    деловым партнером по выполнению заказов и глобальным
                    продажам для розничных и{" "}
                    <b> оптовых продавцов электронной коммерции </b> . Позвольте
                    нам взять на себя выполнение операций, чтобы вы могли
                    сосредоточиться на развитии своего бизнеса и быть уверенными
                    ,<b> что мы проделали последнюю милю </b> .{" "}
                  </p>
                </div>
                <img src={growth} alt="growth" />
              </div>
            </FadeIn>

            <FadeIn
              from="left"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={200}
            >
              <div className="work-type">
                <img src={client} alt="client" />
                <div className="text">
                  <h3>Мы будем Превосходить Ожидания ваших клиентов</h3>
                  <p>
                    В отличие от большинства других <b> фулфилмент-центров</b>,
                    мы не говорим «нет» нашим клиентам. Независимо от того,
                    хотите ли вы включить маркетинговую вставку в заказ вашего
                    клиента, ленты, папиросную бумагу или рукописную подарочную
                    записку,{" "}
                    <b>
                      {" "}
                      мы обеспечим процесс распаковки, который понравится вам и
                      вашим клиентам
                    </b>
                    .
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn
              from="right"
              positionOffset={400}
              triggerOffset={200}
              delayInMilliseconds={200}
            >
              <div className="work-type">
                <div className="text">
                  <h3>Наблюдайте за ростом вашего бизнеса </h3>
                  <p>
                    Видимость в нашем собственном{" "}
                    <b> программном обеспечении для управления складом </b>{" "}
                    обеспечивает доступ ко всем этапам процесса исполнения.
                    Клиентский <b>портал</b> предоставляет аналитику в режиме
                    реального времени, отслеживание отправлений и время
                    транзита, затраты, средние показатели возврата и многое
                    другое. Просматривайте свой бизнес в{" "}
                    <b> режиме реального времени </b> из любой точки мира на
                    любом устройстве
                  </p>
                </div>
                <img src={watch} alt="watch" />
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn
          from="bottom"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={200}
        >
          <div className="security">
            <div className="container">
              <Title text="Экологическая устойчивость" />
              <p>
                мы стремимся построить устойчивый бизнес для членов нашей
                команды, клиентов и сообществ. Мы продолжаем повышать наши
                операционные ожидания и постоянно работаем над целями, которые
                уменьшают наше воздействие на окружающую среду. Быть хорошим
                партнером планеты — это интегрировать ответственные
                экологические методы в наши рабочие процессы, где это возможно,
                каждый день.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="ecology">
          <h1>Название продолжает работать над </h1>
          <h1 className="green">экологичностью</h1>

          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={200}
          >
            <div className="eco-def">
              <img src={care} alt="care" />
              <div>
                <p>
                  Мы сокращаем занимаемую площадь и сокращаем расходы благодаря
                  <b> инновационным программам переработки</b>, позволяющим
                  максимально эффективно использовать упаковочные и
                  транспортировочные материалы. Мы даже работаем с клиентами,
                  чтобы помочь разработать многоразовые почтовые программы и
                  сократить одноразовую упаковку.
                </p>
                <p>
                  Мы всегда используем <b> экологичный</b> гофрокартон и
                  упаковку. Фактически, <b>100 процентов</b> нашей упаковки
                  изготовлено из экологически чистых материалов, произведенных и
                  переработанных. Все, что мы используем, и вся упаковка
                  входящих поставок наших клиентов также отправляется обратно на
                  переработку{" "}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            from="right"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={200}
          >
            <div className="eco-def">
              <p className="right">
                Мы обрабатываем цифры и <b>отслеживаем наши данные</b> , а также
                спроектировали наше предприятие таким образом, чтобы сократить
                затраты на рабочую силу и энергию за счет{" "}
                <b>сокращения времени </b>
                перемещения по складу и оптимального использования вертикального
                пространства.
              </p>
              <img src={optimize} alt="care" className="align-right" />
            </div>
          </FadeIn>

          <FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={200}
          >
            <div className="eco-def">
              <img src={saving} alt="care" />
              <p>
                Несмотря на то, что мы не используем много воды для нашей работы
                в<b> Название</b>, мы стараемся максимально <b>экономить</b> ее,
                устанавливая <b> туалеты и смесители с низким расходом</b>.
              </p>
            </div>
          </FadeIn>

          <FadeIn
            from="right"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={200}
          >
            <div className="eco-def">
              <p className="right">
                Более половины наших клиентов участвуют в собственных
                инициативах по <b>устойчивому</b> использованию энергии и
                продуктов, и мы все продолжаем работать вместе, чтобы найти
                способы оказать более положительное влияние на окружающую среду.{" "}
                <b>95 процентов</b> наших поставок отправляются с{" "}
                <b>нулевым выбросом углерода, что не оказывает воздействия</b>{" "}
                на окружающую среду.
              </p>
              <img src={decision} alt="decision" className="align-right" />
            </div>
          </FadeIn>
        </div>

        <Form />
      </div>
    );
  }
}

export default About;
