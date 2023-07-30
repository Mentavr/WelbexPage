import React from "react";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import whatsapp from "../../images/whatsapp.svg";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="container_footer">
      <div className="footer_container">
        <section className="footer_item">
          <h1 className="text footer_subtitle">О компании</h1>
          <div className="footer_menu_wraper">
            <nav className="footer_nav_items">
              <a className="text footer_nav_item" href="#">
                Партнёрская программа
              </a>
              <a className="text footer_nav_item" href="#">
                Вакансии
              </a>
            </nav>
          </div>
        </section>
        <section className="footer_item">
          <h1 className="text footer_subtitle">Меню</h1>
          <div className="footer_company_wraper">
            <nav className="footer_nav_items company_nav_first">
              <a className="text footer_nav_item" href="#">
                Расчёт стоимости
              </a>
              <a className="text footer_nav_item" href="#">
                Услуги
              </a>
              <a className="text footer_nav_item" href="#">
                Виджеты
              </a>
              <a className="text footer_nav_item" href="#">
                Интеграции
              </a>
              <a className="text footer_nav_item" href="#">
                Наши клиенты
              </a>
            </nav>
            <nav className="footer_nav_items company_nav_second">
              <a className="text footer_nav_item" href="#">
                Кейсы
              </a>
              <a className="text footer_nav_item" href="#">
                Благодарственные письма
              </a>
              <a className="text footer_nav_item" href="#">
                Сертификаты
              </a>
              <a className="text footer_nav_item" href="#">
                Блог на Youtube
              </a>
              <a className="text footer_nav_item" href="#">
                Вопрос / Ответ
              </a>
            </nav>
          </div>
        </section>
        <section className="footer_item">
          <h1 className="text footer_subtitle">Контакты</h1>
          <div className="footer_socials_wraper">
            <nav className="footer_nav_items">
              <a className="text footer_nav_item" href="tel:+75555555555">
                +7 555 555-55-55
              </a>
              <div className="socials">
                <a className="footer_nav_item" href="#">
                  <img className="social_logo" src={telegram} alt="telegram" />
                </a>

                <a className="footer_nav_item" href="#">
                  <img className="social_logo" src={viber} alt="viber" />
                </a>
                <a className="footer_nav_item" href="#">
                  <img className="social_logo" src={whatsapp} alt="whatsapp" />
                </a>
              </div>
              <a className="text footer_nav_item" href="#">
                Москва, Путевой проезд 3с1, к 902
              </a>
            </nav>
          </div>
          <div className="designed-wrapper">
            <p className="text text_description">©WELBEX 2022. Все права защищены.</p>
            <a className="text text_description">Политика конфиденциальности</a>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
