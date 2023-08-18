import React from "react";
import PropTypes from "prop-types";

import { Panel, PanelHeader, Button, Div, Text } from "@vkontakte/vkui";

import logo from "../img/logo.png";
import "./index.css";

const Home = ({ id, go }) => (
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
          <Text>Это ваши актуальные данные:</Text>
          <Text>
            Ваш номер лицевого счета: ❎ Вы не передали данные о счете
          </Text>
          <Text>Ваш прибор учета газа: ❎ не найден</Text>
          <Text>Сумма к оплате в текущем месяце: ❎</Text>
          <Text>Данные о сумме обновлялись: ❎</Text>
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

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
