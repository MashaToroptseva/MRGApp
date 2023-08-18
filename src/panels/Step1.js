import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
} from "@vkontakte/vkui";

import "./index.css";

const Step1 = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
      Мой Газ
    </PanelHeader>
    <Div>
      <Panel>
        <Button size="l" appearance="accent" stretched>
          Оплатить
        </Button>
      </Panel>
    </Div>
  </Panel>
);

Step1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Step1;
