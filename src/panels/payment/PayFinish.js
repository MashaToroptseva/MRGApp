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

const PayFinish = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg-group">
          <div className="msg">👏 Спасибо за оплату!</div>
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

PayFinish.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default PayFinish;
