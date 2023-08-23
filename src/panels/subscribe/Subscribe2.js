import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../index.css";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  ButtonGroup,
} from "@vkontakte/vkui";

const Subscribe2 = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center">
          <div>
            Для получения доступа к электронной квитанции, вам нужно отказаться
            от бумажной
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
              data-to="subscribeFinish"
            >
              Отказаться
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="subscribe1"
            >
              Назад
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Subscribe2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Subscribe2;
