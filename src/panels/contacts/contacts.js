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
          <a
            href="https://www.peterburgregiongaz.ru/geo/sankt-peterburg/"
            target="_blank"
          >
            <Button size="l" appearance="accent" stretched>
              Санкт - Петербург
            </Button>
          </a>
          <a
            href="https://www.peterburgregiongaz.ru/geo/leningradskaja-oblast/"
            target="_blank"
          >
            <Button size="l" appearance="accent" stretched>
              Ленинградская обл.
            </Button>
          </a>
          <a
            href="https://www.peterburgregiongaz.ru/geo/respublika-karelija/"
            target="_blank"
          >
            <Button size="l" appearance="accent" stretched>
              Карелия
            </Button>
          </a>
          <a
            href="https://www.peterburgregiongaz.ru/geo/kaliningradskaja-oblast/"
            target="_blank"
          >
            <Button size="l" appearance="accent" stretched>
              Калининград
            </Button>
          </a>
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
