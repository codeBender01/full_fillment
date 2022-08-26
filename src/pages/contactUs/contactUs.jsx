import React from "react";
import Title from "../../components/title/Title";
import "./contact-us.scss";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us pad">
        <Title text="Свяжитесь с нами" />
        <div className="line"></div>

        <div className="contacts">
          <div className="main-requests">
            <h3>Обшие запросы</h3>
            <span>Yurdy,Saher ady, koce ady, jay,otag</span>
            <span>+993(60)-00-00-00</span>
            <span>ady.karhana@gmail.com</span>
          </div>

          <div className="hor-line"></div>

          <div className="hotline">
            <h3>Свяжитесь с нами на прямую</h3>
            <div>
              <h5>Имя и Фамилия</h5>
              <span>+993(60)-00-00-00</span>
              <span>ady.karhana@gmail.com</span>
            </div>
            <div>
              <h5>Имя и Фамилия</h5>
              <span>+993(60)-00-00-00</span>
              <span>ady.karhana@gmail.com</span>
            </div>
          </div>
        </div>

        <form action="URL">
          <div>
            <label htmlFor="fullName">Полное имя *</label>
            <input type="text" id="fullName" />
          </div>
          <div>
            <label htmlFor="e-mail">Электронная почта *</label>
            <input type="email" id="e-mail" />
          </div>
          <div>
            <label htmlFor="message">Сообщение *</label>
            <textarea name="message" id="message" rows="10"></textarea>
          </div>

          <div className="submit-btn">
            <input
              type="submit"
              value="ОТПРАВИТЬ СООБШЕНИЕ"
              className="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
