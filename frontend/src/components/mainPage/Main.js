import React from "react";
import "../../css/Body.css";
import "../../css/Main.css";
const Main = () => {
  return (
    <div className="container_main">
      <section className="content_items">
        <h1 className="text title">Зарабатывайте больше</h1>
        <h1 className="text title title_bold">с WELBEX</h1>
        <p className="text slogan">Развиваем и контролируем продажи за вас</p>
      </section>
      <section className="content_items">
        <div className="content_item_tagline">
          <p className="text tagline">
            Вместе с 
            <em className="tagline accent_text">бесплатной консультацией </em>
            мы дарим:
          </p>
        </div>
        <div className="content_item">
          <div className="content_item_wraper">
            <div className="subtitle_wraper">
              <h2 className="text subtitle">Виджеты</h2>
              <p className="text subtitle_text">30 готовых решений</p>
            </div>
            <div className="subtitle_wraper">
              <h2 className="text subtitle">Dashboard</h2>
              <p className="text subtitle_text">
                с показателями вашего бизнеса
              </p>
            </div>
            <div className="subtitle_wraper">
              <h2 className="text subtitle">Skype Аудит</h2>
              <p className="text subtitle_text">отдела продаж и CRM системы</p>
            </div>
            <div className="subtitle_wraper">
              <h2 className="text subtitle">35 дней</h2>
              <p className="text subtitle_text">использования CRM</p>
            </div>
          </div>
          <div className="content_item_wraper_mobile">
            <div className="subtitle_wraper_mobile">
              <div className="decor_line"></div>
              <p className="text subtitle_text_mobile">Skype аудит</p>
            </div>
            <div className="subtitle_wraper_mobile">
              <div className="decor_line"></div>
              <p className="text subtitle_text_mobile">30 виджетов</p>
            </div>
            <div className="subtitle_wraper_mobile">
              <div className="decor_line"></div>
              <p className="text subtitle_text_mobile">Dashboard</p>
            </div>
            <div className="subtitle_wraper_mobile">
              <div className="decor_line"></div>
              <p className="text subtitle_text_mobile">Месяц аmoCRM</p>
            </div>
          </div>
        </div>
      </section>
      <div className="btn_wraper">
      <button className="btn text">Получить консультацию</button>
      </div>
    </div>
  );
};

export default Main;
