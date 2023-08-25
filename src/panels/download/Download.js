import React from "react";
import PropTypes from "prop-types";
import { Icon28DocumentTextOutline } from "@vkontakte/icons";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  ButtonGroup,
  Link,
} from "@vkontakte/vkui";

import "../index.css";

const MetersFinish = ({ id, go, accountData }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center text">
          <div>Отлично!✨</div>
          <div>Для просмотра квитанции, откройте документ:</div>

          <a
            className="inline-link"
            href={accountData.url_receipt}
            target="_blank"
          >
            <span className="svg">
              <Icon28DocumentTextOutline />
            </span>

            <span> Электронная квитанция</span>
          </a>
        </Div>
        <div>
          <ButtonGroup
            className="button-group"
            mode="vertical"
            gap="m"
            stretched
          >
            <a href={accountData.url_receipt} target="_blank">
              <Button size="l" appearance="accent" stretched>
                Скачать
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
        </div>
      </Div>
    </Panel>
  );
};

MetersFinish.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default MetersFinish;
