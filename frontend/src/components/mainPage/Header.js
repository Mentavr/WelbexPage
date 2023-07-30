import React from "react";
import "../../css/Body.css";
import "../../css/Header.css";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import logo from  "../../images/logo.svg"
const Header = () => {
  return (
    <div className="container_header">
      <div className="navigate_wraper">
        <div className="logo_wraper">
          <div className="logo_image">
            <a src="#">
              <img src={logo} alt="logo"></img>
            </a>
          </div>
          <div className="text_logo_wraper">
            <p className="text text_logo">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </p>
          </div>
        </div>
        <div className="navigate">
          <nav className="nav_items">
            <a href="#" class="text nav_item">
              Услуги
            </a>
            <a href="#" class="text nav_item">
              Виджеты
            </a>
            <a href="#" class="text nav_item">
              Интеграции
            </a>
            <a href="#" class="text nav_item">
              Кейсы
            </a>
            <a href="#" class="text nav_item">
              Сертификаты
            </a>
          </nav>
        </div>
      </div>
      <div className="feedback">
        <div className="feedback_wraper">
          <div className="number_wraper">
            <a className="number text" href="tel:+75555555555">
              +7 555 555-55-55
            </a>
          </div>
          <div className="icon">
            <ul className="item feedback_items">
              <li className="item feedback_item">
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li className="feedback_item">
                <a href="#">
                  <img src={viber} alt="viber" />
                </a>
              </li>
              <li className="feedback_item">
                <a href="#">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
