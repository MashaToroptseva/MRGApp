import React from "react";
import PropTypes from "prop-types";

import {
  ButtonGroup,
  Button,
  Div,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";

import "./index.css";

const Menu = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <div className="msg">👋 Здравствуйте! Что вы хотите сделать?</div>
        <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Узнать сумму к оплате
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Оплатить
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Передать показания
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Подписаться на электронную квитан..
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Скачать электронную квитанцию
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Menu;
