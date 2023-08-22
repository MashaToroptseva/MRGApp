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
          <div>
            🙅‍♂️ Теперь вместо бумажной квитанции Вы будете получать электронную
            квитанцию на указанный вами адрес электронной почты.
          </div>
          <div>
            Номер лицевого счета: <b>123456789</b>
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
