import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
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
          <div>👏 Спасибо за передачу показаний!</div>
          <div>
            Актуальные данные:
            <div>
              Номер лицевого счета: <b>123456789</b>{" "}
            </div>
            <div>
              Последние показания: <b>10.10.2022: 251 м3</b>{" "}
            </div>
          </div>
        </Div>
        <div>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="home"
          >
            Главная
          </Button>
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
