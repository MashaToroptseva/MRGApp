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

import "../index.css";

const Contacts = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <div className="msg">Адреса и контакты абонентских пунктов:</div>
        <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={(e) => go(e, "sum")}
            data-to="step1"
          >
            Санкт - Петербург
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={(e) => go(e, "payment")}
            data-to="step1"
          >
            Ленинградская обл.
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={(e) => go(e, "meters")}
            data-to="step1"
          >
            Карелия
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={(e) => go(e, "subscribe")}
            data-to="step1"
          >
            Калининград
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="home"
          >
            Главная
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Contacts;
