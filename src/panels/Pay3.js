import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  Input,
  ButtonGroup,
} from "@vkontakte/vkui";

import "./index.css";
import logo from "../img/logo.png";

const Pay3 = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg-group">
          <div className="msg">
            Номер лицевого счета: 123456789 Телефон: 78005553535 Сумма платежа:
            90.0 ₽ Комиссия: 1.53 ₽ Итого к оплате: 91.53 ₽
          </div>
          <div className="msg">
            <img className="logo" src={logo} />
            Оплата счета 123456789 <br />
            За 4м³ от 20.12.2022
          </div>
        </Div>
        <div>
          <ButtonGroup
            className="button-group"
            mode="vertical"
            gap="m"
            stretched
          >
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Оплатить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Изменить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Назад
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Pay3.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Pay3;
