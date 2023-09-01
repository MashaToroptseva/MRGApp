import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader, Button, Div, Text } from "@vkontakte/vkui";

import logo from "../img/logo.png";
import "./index.css";

const Home = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader className="header">Мой Газ</PanelHeader>
      <div className="menu-container">
        <Div className="home-text">
          <img className="logo" src={logo} />
          <div className="text">
            <Text>
              Мой ГАЗ – приложение для удобной работы Абонентов «Газпром
              межрегионгаз Санкт-Петербург»
            </Text>
            <Text>
              <b>Это ваши актуальные данные:</b>
            </Text>
            <Text>
              <div>Ваш номер лицевого счета:</div>
              <div>
                <b>❎ Вы не передали данные о счете</b>
              </div>
            </Text>
            <Text>
              <div>Ваш прибор учета газа: </div>
              <div>
                <b>❎ не найден</b>
              </div>
            </Text>
            <Text>
              <div>Сумма к оплате в текущем месяце:</div>
              <div>
                <b>✅ 80.0 ₽</b>
              </div>
            </Text>
            <Text>
              <div>Данные о сумме обновлялись:</div>
              <div>
                <b>✅ 01.12.2022</b>
              </div>
            </Text>
          </div>
        </Div>
        <Div>
          <Button
            stretched
            appearance="accent"
            size="l"
            mode="primary"
            onClick={go}
            data-to="menu"
          >
            Перейти к функционалу
          </Button>
        </Div>
      </div>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
