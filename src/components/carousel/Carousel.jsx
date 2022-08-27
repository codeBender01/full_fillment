import React from "react";
import OwlCarousel from "react-owl-carousel";
import order from "../../images/order.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const nums = [1, 2, 3];

function Carousel() {
  return (
    <OwlCarousel className="owl-theme" loop items={1} autoplay>
      {nums.map((num) => {
        return (
          <div className="welcome-text flex item" key={num}>
            <div>
              <h3>Самый умный способ выполнить ваши онлайн-заказы.</h3>
              <p>
                quis tincidunt ea iusto Lorem ex eu enim augue dignissim
                lobortis suscipit aliquip elit, odio vel ullamcorper amet, et
                veniam, vel facilisi. volutpat. dolor nonummy minim qui wisi in
                euismod dignissim lobortis suscipit aliquip elit, odio vel
                ullamcorper amet, et veniam, vel facilisi.
              </p>
            </div>
            <img src={order} alt="welcome" />
          </div>
        );
      })}
    </OwlCarousel>
  );
}

export default Carousel;
