import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  ButtonGroup,
} from "@vkontakte/vkui";

import "../index.css";

const MetersFinish = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center text">
          <div>Отлично!✨</div>
          <div>Для просмотра квитанции, откройте документ:</div>
          <div>Электронная квитанция</div>
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
              data-to="home"
            >
              Скачать
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
