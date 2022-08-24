import React from "react";
import "./form.scss";

function Form() {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form">
      <div className="container">
        <h2>
          Готовы масштабировать свой бизнес? Заполните форму быстрой связи, и
          один из наших опытных консультантов свяжется с вами в течение 24
          часов.
        </h2>

        <form action="URL">
          <div>
            <label htmlFor="fname">Имя *</label>
            <input type="text" id="fname" />
          </div>

          <div>
            <label htmlFor="lname">Фамилия *</label>
            <input type="text" id="lname" />
          </div>

          <div>
            <label htmlFor="mail">Электронная почта *</label>
            <input type="email" id="mail" />
          </div>

          <div>
            <label htmlFor="phone">Номер телефона*</label>
            <input type="tel" id="phone" />
          </div>
          <div>
            <label htmlFor="add-info">Доп информация</label>
            <input type="text" id="add-info" />
          </div>

          <div>
            <label htmlFor="company">Компания*</label>
            <input type="text" id="company" />
          </div>

          <input
            onClick={submit}
            type="submit"
            value="Поднимите мой бизнес на новый уровень"
            className="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
