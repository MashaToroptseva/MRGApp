import React from "react";
import PropTypes from "prop-types";

import {
  ButtonGroup,
  Button,
  Div,
  Panel,
  Group,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";

import "./index.css";

const Menu = ({ id, go }) => (
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
          data-to="view1"
        >
          Узнать сумму к оплате
        </Button>
        <Button size="l" appearance="accent" stretched>
          Оплатить
        </Button>
        <Button size="l" appearance="accent" stretched>
          Передать показания
        </Button>
        <Button size="l" appearance="accent" stretched>
          Подписаться на электронную квитан..
        </Button>
        <Button size="l" appearance="accent" stretched>
          Скачать электронную квитанцию
        </Button>
      </ButtonGroup>
    </Div>
  </Panel>
);

Menu.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Menu;
